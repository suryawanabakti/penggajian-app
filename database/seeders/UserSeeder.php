<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'serlina@admin',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole("admin");

        \App\Models\User::create([
            'name' => 'Pimpinan',
            'email' => 'pimpinan@pimpinan',
            'password' => bcrypt('password')
        ])->assignRole("pimpinan");
    }
}
