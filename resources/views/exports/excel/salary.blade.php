<table style="border: 1px solid;">
    <tr>
        <td colspan="6" style="text-align: center; font-weight:bold;
        ">{{ 'UNITAMA' }}</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align: center
        ">
            {{ 'Jl. Perintis Kemerdekaan, Tamalanrea, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245' }}
        </td>
    </tr>
    <tr>
        <td colspan="6" style="text-align: center;font-weight:bold;
        ">Slip Gaji Karyawan</td>
    </tr>

    <tr>
        <td width="200px">Nama</td>
        <td width="20px"> :</td>
        <td width="200px">{{ $salary->employee->user->name }}</td>

        <td width="200px"></td>
        <td width="20px"></td>
        <td width="200px"></td>
    </tr>

    <tr>
        <td>Jabatan</td>
        <td>:</td>
        <td>{{ $salary->employee->position->name }}</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="3" style="text-align: center; background-color: #3cb371; border: 1px solid black;">
            PENDAPATAN
        </td>
        <td colspan="3" style="text-align: center; background-color: #ffa500; border: 1px solid black;">POTONGAN
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;">Gaji Pokok</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;"> {{ number_format(123123123, 2) }} </td>

        <td style="border: 1px solid black;">BPJS Kesehatan</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;"> {{ number_format(123123123, 2) }}
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;">Tunjangan Jabatan</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right; border: 1px solid black;">{{ number_format(123123123, 2) }}
        </td>

        <td style="border: 1px solid black;">BPJS Ketenagakerjaan</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;">
            {{ number_format(123123123, 2) }} </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;">Tunjangan Variabel</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;"> {{ number_format(123123123, 2) }}
        </td>

        <td style="border: 1px solid black;">Pinjaman</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;">{{ number_format(123123123, 2) }}</td>
    </tr>
    <tr>
        <td style="border: 1px solid black;">Tunjangan Transport</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;">
            {{ number_format(123123123, 2) }} </td>

        <td style="border: 1px solid black;">Faktur</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right; border: 1px solid black;"> {{ number_format(123123123, 2) }} </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;">Tunjangan Makan</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right; border: 1px solid black;"> {{ number_format(123123123, 2) }}
        </td>

        <td style="border: 1px solid black;">Absensi</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right; border: 1px solid black;"> {{ number_format(123123123, 2) }} </td>

    </tr>
    <tr>
        <td style="border: 1px solid black;">Tunjangan Lembur</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;"> {{ number_format(123123123, 2) }}
        </td>

        <td style="border: 1px solid black;">Others</td>
        <td style="border: 1px solid black;">:</td>
        <td style="text-align:right;border: 1px solid black;"> {{ number_format(123123123, 2) }} </td>
    </tr>

    <tr>
        <td colspan="6" style="border: 1px solid black;"></td>
    </tr>
    <tr>
        <td style="text-align: center; background-color: #3cb371; border: 1px solid black;">Total Pendapatan</td>
        <td style="text-align: center; background-color: #3cb371;border: 1px solid black;">Rp.</td>
        <td style="text-align: center; background-color: #3cb371; text-align:right; border: 1px solid black;">
            {{ number_format(123123123, 2) }}
        </td>

        <td style="text-align: center; background-color: #ffa500;border: 1px solid black;">Total Potongan</td>
        <td style="text-align: center; background-color: #ffa500;border: 1px solid black;">Rp.</td>
        <td style="text-align: center; background-color: #ffa500; text-align:right;border: 1px solid black;">
            {{ number_format(123123123, 2) }}
        </td>
    </tr>
    <tr>
        <td colspan="3" style="background-color: white;border: 1px solid black;"></td>
        <td style="text-align: center; background-color: #3cb371;border: 1px solid black;">Take Home Pay</td>
        <td style="background-color: #3cb371;border: 1px solid black;">Rp.</td>
        <td style="background-color: #3cb371; text-align:right;">{{ number_format(123123123 - 12123123, 2) }}
        </td>
    </tr>
    <tr>
        <td colspan="6" style=""></td>
    </tr>
    <tr>
        <td colspan="3" style="">{{ $salary->updated_at->format('d M Y') }}
        </td>


        <td>Diterima
        </td>
    </tr>
    <tr>
        <td colspan="3" style="">dr. Serliana, Sp.P.D</td>

        <td style="">{{ $salary->employee->user->name }}</td>
    </tr>
</table>
