<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $table = 'professor_student';

    protected $fillable = [
        'name',
        'student_id',
        'professor_id',
    ];
}
