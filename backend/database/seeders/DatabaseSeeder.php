<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Classroom;
use App\Models\Professor;
use App\Models\ProfessorStudent;
use App\Models\Student;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Professor::factory()->has(Student::factory()->count(20))->create();

        Classroom::all()->each(function(Classroom $classroom) {
            $professor = Professor::find($classroom->professor_id);

            $classroom->update([
                'name' => "Classe de {$professor->name}",
            ]);
        });

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
