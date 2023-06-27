<?php

namespace Database\Seeders;

use App\Models\Orchestre;
use Illuminate\Database\Seeder;

class OrchestreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $orchestres = Orchestre::factory()->count(10)->create();
    }
}
