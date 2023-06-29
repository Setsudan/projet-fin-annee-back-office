<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfessorResource;
use App\Models\Professor;

class ProfessorController extends Controller
{
    public function show(Professor $professor)
    {
        return new ProfessorResource($professor);
    }

    public function index()
    {
        $professors = Professor::all();

        return ProfessorResource::collection($professors);
    }
}
