<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('topic_id')->constrained()->onDelete('cascade');
            $table->enum('difficulty_level', ['easy', 'medium', 'hard']);
            $table->text('question_text');
            $table->json('options'); // Array of options
            $table->string('correct_answer');
            $table->text('explanation')->nullable();
            $table->text('math_formula')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
