<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Professor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
    ];

    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class);
    }
}
