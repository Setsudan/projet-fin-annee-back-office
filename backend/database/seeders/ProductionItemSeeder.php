<?php

namespace Database\Seeders;

use App\Models\ProductionItem;
use Illuminate\Database\Seeder;

class ProductionItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductionItem::factory()->count(10)->create();
    }
}
