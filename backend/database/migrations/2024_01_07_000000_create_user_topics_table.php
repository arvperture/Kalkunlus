<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_topics', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('topic_id')->constrained()->onDelete('cascade');
            $table->float('progress')->default(0);
            $table->timestamp('mastered_at')->nullable();
            $table->primary(['user_id', 'topic_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_topics');
    }
};
