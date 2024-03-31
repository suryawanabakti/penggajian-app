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
            $table->bigInteger('tunjangan_jabatan')->default(0);
            $table->bigInteger('tunjangan_keluarga')->default(0);
            $table->bigInteger('tunjangan_khusus')->default(0);
            $table->bigInteger('tunjangan_lembur_dan_makan')->default(0);
            $table->bigInteger('tunjangan_kelebihan_mengajar')->default(0);
            $table->bigInteger('tunjangan_kesra')->default(0);
            $table->bigInteger('potongan_pph21')->default(0);
            $table->bigInteger('potongan_pinjaman_koperasi')->default(0);
            $table->bigInteger('potongan_sumbangan_kyy')->default(0);
            $table->bigInteger('potongan_simpanan_wajib')->default(0);
            $table->bigInteger('potongan_bpjs_kesehatan_dan_tenagakerjaan')->default(0);
            $table->bigInteger('potongan_arisan')->default(0);
            $table->bigInteger('potongan_dll')->default(0);
            $table->bigInteger('tunjangan');
            $table->bigInteger('potongan');
            $table->bigInteger('total');
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
