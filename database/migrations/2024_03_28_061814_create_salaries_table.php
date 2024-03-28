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
        Schema::create('salaries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id')->references('id')->on('employees')->cascadeOnDelete();
            $table->bigInteger('gaji_pokok')->default(0);
            $table->bigInteger('tunjangan')->default(0);
            $table->bigInteger('pph21')->default(0);
            $table->bigInteger('arisan')->default(0);
            $table->bigInteger('kelebihan')->default(0);
            $table->bigInteger('lembur')->default(0);
            $table->bigInteger('makan')->default(0);
            $table->bigInteger('kesra')->default(0);
            $table->bigInteger('total')->default(0);
            $table->timestamp('tanggal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('salaries');
    }
};
