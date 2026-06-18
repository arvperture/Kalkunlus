<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Question;
use App\Models\QuizAnswer;
use App\Models\UserProgress;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Get daily personalized questions (5 per day)
     * Based on user's weak points and learning level
     */
    public function getDailyQuestions(Request $request)
    {
        $user = $request->user();
        $todayDate = now()->toDateString();

        // Check if user already has daily questions today
        $existingQuiz = Quiz::where('user_id', $user->id)
            ->whereDate('created_at', $todayDate)
            ->first();

        if ($existingQuiz) {
            $questions = Question::whereIn('id', $existingQuiz->answers()->pluck('question_id'))
                ->select('id', 'question_text', 'options', 'difficulty_level')
                ->get();
            
            return response()->json([
                'quiz_id' => $existingQuiz->id,
                'questions' => $questions,
                'is_existing' => true,
            ]);
        }

        // Get user's weak topics
        $userProgress = UserProgress::where('user_id', $user->id)
            ->orderBy('progress_percentage', 'asc')
            ->limit(3)
            ->pluck('topic_id');

        // Fallback to random topics if no progress
        if ($userProgress->isEmpty()) {
            $userProgress = [1, 2, 3, 4, 5];
        }

        // Select 5 personalized questions
        $questions = Question::whereIn('topic_id', $userProgress)
            ->inRandomOrder()
            ->limit(5)
            ->select('id', 'question_text', 'options', 'difficulty_level')
            ->get();

        // Create new quiz session
        $quiz = Quiz::create([
            'user_id' => $user->id,
            'topic_id' => $userProgress->first(),
            'questions_count' => count($questions),
        ]);

        return response()->json([
            'quiz_id' => $quiz->id,
            'questions' => $questions,
            'is_existing' => false,
        ]);
    }

    /**
     * Submit answer to a question
     * Validates correctness and updates user progress
     */
    public function submitAnswer(Request $request, $quizId)
    {
        $validated = $request->validate([
            'question_id' => 'required|exists:questions,id',
            'user_answer' => 'required|string',
        ]);

        $quiz = Quiz::findOrFail($quizId);
        $question = Question::findOrFail($validated['question_id']);

        $isCorrect = $validated['user_answer'] == $question->correct_answer;

        $answer = QuizAnswer::create([
            'quiz_id' => $quizId,
            'question_id' => $validated['question_id'],
            'user_answer' => $validated['user_answer'],
            'is_correct' => $isCorrect,
        ]);

        return response()->json([
            'is_correct' => $isCorrect,
            'explanation' => $question->explanation,
            'correct_answer' => $question->correct_answer,
        ]);
    }

    /**
     * Get user's overall progress
     */
    public function getProgress(Request $request)
    {
        $user = $request->user();

        $progress = UserProgress::where('user_id', $user->id)
            ->with('topic')
            ->get();

        $totalQuizzes = Quiz::where('user_id', $user->id)->count();
        $averageScore = Quiz::where('user_id', $user->id)->avg('score') ?? 0;

        return response()->json([
            'user' => $user,
            'topics_progress' => $progress,
            'total_quizzes_completed' => $totalQuizzes,
            'average_score' => round($averageScore, 2),
            'daily_streak' => $user->streak_days,
        ]);
    }

    /**
     * Complete quiz and calculate score
     */
    public function completeQuiz(Request $request, $quizId)
    {
        $quiz = Quiz::findOrFail($quizId);
        $answers = $quiz->answers;

        $correctCount = $answers->where('is_correct', true)->count();
        $score = ($correctCount / $answers->count()) * 100;

        // Update quiz
        $quiz->update([
            'correct_count' => $correctCount,
            'score' => $score,
            'completed_at' => now(),
        ]);

        // Update user progress
        UserProgress::updateOrCreate(
            [
                'user_id' => $quiz->user_id,
                'topic_id' => $quiz->topic_id,
            ],
            [
                'progress_percentage' => $score,
                'quizzes_completed' => \DB::raw('quizzes_completed + 1'),
                'total_score' => \DB::raw('total_score + ' . $score),
                'last_attempted_at' => now(),
            ]
        );

        return response()->json([
            'score' => $score,
            'correct_count' => $correctCount,
            'total_count' => $answers->count(),
            'message' => 'Quiz completed! Great effort.',
        ]);
    }
}
