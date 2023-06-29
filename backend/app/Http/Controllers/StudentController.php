<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;

class StudentController extends Controller
{
    public function show(Student $student)
    {
        return new StudentResource($student);
    }

    public function index()
    {
        $student = Student::all();

        return StudentResource::collection($student);
    }
}
