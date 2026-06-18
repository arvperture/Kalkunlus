<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Topic;
use App\Models\UserProgress;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Get user's statistics
     */
    public function getStats(Request $request)
    {
        $user = $request->user();

        $topicProgress = UserProgress::where('user_id', $user->id)
            ->with('topic')
            ->get();

        $stats = [
            'user_name' => $user->name,
            'level' => $user->level,
            'total_score' => $user->total_score,
            'streak_days' => $user->streak_days,
            'topics_progress' => $topicProgress,
            'topics_mastered' => $topicProgress->where('progress_percentage', '>=', 80)->count(),
        ];

        return response()->json($stats);
    }

    /**
     * Update user profile
     */
    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'level' => 'sometimes|in:elementary,junior_high,senior_high,university',
        ]);

        $user->update($validated);

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ]);
    }

    /**
     * Get all available topics
     */
    public function getTopics(Request $request)
    {
        $user = $request->user();

        $topics = Topic::select('id', 'name', 'description', 'level', 'category', 'icon')
            ->get()
            ->map(function ($topic) use ($user) {
                $progress = UserProgress::where('user_id', $user->id)
                    ->where('topic_id', $topic->id)
                    ->first();

                return [
                    'id' => $topic->id,
                    'name' => $topic->name,
                    'description' => $topic->description,
                    'level' => $topic->level,
                    'category' => $topic->category,
                    'icon' => $topic->icon,
                    'progress' => $progress?->progress_percentage ?? 0,
                    'mastered' => $progress?->progress_percentage >= 80 ?? false,
                ];
            });

        return response()->json($topics);
    }
}
