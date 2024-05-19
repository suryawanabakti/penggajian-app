<?php

namespace Database\Seeders;

use App\Models\ListNumber;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ListNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 100000,
        ]);

        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 200000,
        ]);

        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 300000,
        ]);

        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 400000,
        ]);

        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 500000,
        ]);

        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 600000,
        ]);
        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 700000,
        ]);
        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 800000,
        ]);
        ListNumber::create([
            'type' => 'tunjangan',
            'number' => 900000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 1000000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 1500000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 2000000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 2500000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 3000000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 3500000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 4000000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 4500000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 5000000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 5500000,
        ]);

        ListNumber::create([
            'type' => 'gaji_pokok',
            'number' => 5600000,
        ]);
    }
}
