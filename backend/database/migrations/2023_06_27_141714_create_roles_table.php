<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        DB::table('roles')->insert([
            ['name' => 'regisseur', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'monteur', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'traducteur', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'redacteur', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'controle_qualite', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
