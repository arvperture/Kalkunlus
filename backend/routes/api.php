<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\UserController;

// Public routes
Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::get('/auth/profile', [AuthController::class, 'getProfile']);

    // Quiz
    Route::get('/quiz/daily', [QuizController::class, 'getDailyQuestions']);
    Route::post('/quiz/{quizId}/submit', [QuizController::class, 'submitAnswer']);
    Route::get('/quiz/progress', [QuizController::class, 'getProgress']);
    Route::post('/quiz/{quizId}/complete', [QuizController::class, 'completeQuiz']);

    // User
    Route::get('/user/stats', [UserController::class, 'getStats']);
    Route::put('/user/profile', [UserController::class, 'updateProfile']);
    Route::get('/topics', [UserController::class, 'getTopics']);
});

Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});
