<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('list_numbers', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['gaji_pokok', 'tunjangan', 'potongan']);
            $table->bigInteger('number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list_numbers');
    }
};
