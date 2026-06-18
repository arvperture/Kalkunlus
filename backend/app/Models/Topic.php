<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'level',
        'category',
        'icon',
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function userProgress()
    {
        return $this->hasMany(UserProgress::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_topics')->withPivot('progress', 'mastered_at');
    }
}
