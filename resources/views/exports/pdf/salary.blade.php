<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SLIP GAJI KARYAWAN YAPENKA</title>
    <link rel="icon" type="image/x-icon" href="/static/logo-unitama.ico">
</head>

<body>
    <center>
        <b style="">SLIP GAJI KARYAWAN YAPENKA</b>
    </center>
    <table>
        <tbody>
            <tr>
                <td>No. Urut</td>
                <td>:{{ $salary->id }}</td>
            </tr>
            <tr>
                <td>Nama</td>
                <td>:{{ $salary->employee->user->name }}</td>
            </tr>
            <tr>
                <td>NIK/NIDN</td>
                <td>:{{ $salary->employee->nidn ?? $salary->employee->nik }}</td>
            </tr>
            <tr>
                <td>Bulan</td>
                <td>:{{ \Carbon\Carbon::createFromDate($salary->tanggal)->format('M / Y') }}</td>
            </tr>
        </tbody>
    </table>

    <table border="0" cellpadding="5" cellspacing="0">
        <thead>
            <tr>
                <td width="20">I</td>
                <td width="200" style="font-weight: bold">Gaji Pokok</th>
                <th width="10"></th>
                <th width="110"></th>
                <td width="10">Rp.</td>
                <td width="110" style="text-align: right">{{ number_format($salary->gaji_pokok) }}</th>
            </tr>
            <tr>
                <td></td>
                <td colspan="5">Tunjangan</td>
            </tr>
            <tr>
                <td></td>
                <td>1. Jabatan</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->tunjangan_jabatan) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>2. Keluarga</td>
                <td>Rp.</td>
                @php
                    $tunjangan_keluarga = $salary->gaji_pokok * ($salary->tunjangan_keluarga / 100);
                @endphp
                <td style="text-align: right">{{ number_format($tunjangan_keluarga) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>3. Tunjangan Khusus</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->tunjangan_khusus) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>4. Lembur & Makan</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->tunjangan_lembur_dan_makan) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>5. Kelebihan mengajar</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->tunjangan_kelebihan_mengajar) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>5. Tunjangan Kesra</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->tunjangan_kesra) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>Jumlah</td>
                <td></td>
                <td style="text-align: right"></td>
                <td>Rp.</td>
                <td style="text-align: right">
                    {{ number_format($salary->tunjangan) }}
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Total</td>
                <td></td>
                <td style="text-align: right"></td>
                <td>Rp.</td>
                <td style="text-align: right">
                    @php
                        $totalPendapatan =
                            $salary->tunjangan_jabatan +
                            $tunjangan_keluarga +
                            $salary->tunjangan_khusus +
                            $salary->tunjangan_tunjangan_lembur_dan_makan +
                            $salary->tunjangan_kelebihan_mengajar +
                            $salary->tunjangan_kesra +
                            $salary->gaji_pokok;
                    @endphp
                    {{ number_format($salary->tunjangan_jabatan + $tunjangan_keluarga + $salary->tunjangan_khusus + $salary->tunjangan_tunjangan_lembur_dan_makan + $salary->tunjangan_kelebihan_mengajar + $salary->tunjangan_kesra + $salary->gaji_pokok) }}
                </td>
            </tr>
            {{-- POTONGAN --}}
            <tr>
                <td width="20">II</td>
                <td width="200" style="font-weight: bold">Potongan</th>
                <th width="10"></th>
                <th width="110"></th>
                <th width="10"></th>
                <th width="110"></th>
            </tr>
            <tr>
                <td></td>
                <td>1. Pph 21</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_pph21) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>2. Pinjaman Koperasi</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_pinjaman_koperasi) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>3. Sumbangan KYY</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_sumbangan_kyy) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>4. Simpanan Wajib</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_simpanan_wajib) }}</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>5. BPJS Kesahatan & TK</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_bpjs_kesehatan_dan_tenagakerjaan) }}
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>6. DLL</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_dll) }}
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>7. Arisan</td>
                <td>Rp.</td>
                <td style="text-align: right">{{ number_format($salary->potongan_arisan) }}
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style="text-align: right"></td>
                <td>Rp.</td>
                <td style="text-align: right">
                    @php
                        $totalPotongan =
                            $salary->potongan_pph21 +
                            $salary->potongan_pinjaman_koperasi +
                            $salary->potongan_sumbangan_kyy +
                            $salary->potongan_simpanan_wajib +
                            $salary->potongan_bpjs_kesehatan_dan_tenagakerjaan +
                            $salary->potongan_arisan +
                            $salary->potongan_dll;
                    @endphp
                    {{ number_format($salary->potongan_pph21 + $salary->potongan_pinjaman_koperasi + $salary->potongan_sumbangan_kyy + $salary->potongan_simpanan_wajib + $salary->potongan_bpjs_kesehatan_dan_tenagakerjaan + $salary->potongan_arisan + $salary->potongan_dll) }}
                </td>
            </tr>
            <tr>
                <td></td>
                <td style="font-weight: bold">Gaji Bersih</td>
                <td></td>
                <td style="text-align: right"></td>
                <td>Rp.</td>
                <td style="text-align: right">
                    {{ number_format($totalPendapatan - $totalPotongan) }}
                </td>
            </tr>
        </thead>
    </table>

    <p>Nb: <br><i>Apabila ada ketidaksesuaian/kekeliruan dalam perhitungan, harap menyampaikan kepada bendahara.</i></p>

    <table width="1300px">
        <tr>
            <td></td>
            <td>Makassar, 19 Mei 2023</td>
        </tr>
        <tr>
            <td>Dibayar Oleh</td>
            <td>Diterima Oleh</td>
        </tr>
        <tr>
            <td>Bendahara</td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <h1></h1>
            </td>
        </tr>
        <tr>
            <td>Ramlah</td>
            <td style="">{{ $salary->employee->user->name }}</td>
        </tr>
    </table>

</body>

</html>
