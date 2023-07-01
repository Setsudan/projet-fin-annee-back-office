<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class ProductionItem extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The atrribute that are mass assignable
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'description',
        'quantity',
        'state',
        'type',
    ];
}
