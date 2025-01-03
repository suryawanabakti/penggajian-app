<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\ListNumber;
use App\Models\Salary;
use App\Models\User;
use App\Notifications\CreatedSuccessfully;
use App\Notifications\UpdatedSuccessfully;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalaryController extends Controller
{
    public function index(Request $request)
    {
        $dateOfSalary = Carbon::now();
        $month = Carbon::createFromDate($dateOfSalary)->month;
        $year = Carbon::createFromDate($dateOfSalary)->year;
        if ($request->month) {
            $month = $request->month;
            $dateOfSalary = Carbon::createFromDate("$year-$month-01");
        }

        if ($request->year) {
            $year = $request->year;
            $dateOfSalary = Carbon::createFromDate("$year-$month-01");
        }

        $employees = Employee::all()->map(function ($employee) use ($month, $year) {
            $salary = Salary::whereMonth('tanggal', $month)->whereYear('tanggal', $year)->where('employee_id', $employee->id)->first();
            if (!empty($salary)) {
                $data = [
                    "id" => $salary->id,
                    "tanggal" => Carbon::createFromDate($salary->tanggal)->format('d M Y H:i'),
                ];
            }

            return [
                "id" => $employee->id,
                "nama" => $employee->user?->name,
                "jabatan" => $employee->position?->name,
                "salary" => $data ?? null
            ];
        });

        return Inertia::render("Admin/Salary/Index", ["employees" => $employees, "dateOfSalary" => $dateOfSalary, "month" => $month, "year" => $year]);
    }

    public function show(Employee $employee, $dateOfSalary)
    {
        $salary = Salary::where('employee_id', $employee->id)->orderBy('created_at', 'DESC')->first();

        return Inertia::render("Admin/Salary/Show", [
            "listNumber" => ListNumber::all(),
            "employee" => $employee,
            "salary" => $salary,
            "dateOfSalary" => $dateOfSalary,
            "monthOfSalary" => Carbon::createFromDate($dateOfSalary)->format('M/Y'),
        ]);
    }

    public function store(Request $request, Employee $employee, $dateOfSalary)
    {

        $validatedData = $request->validate([
            'gaji_pokok' => ['required', 'numeric'],
            'tunjangan_jabatan' => ['required', 'numeric'],
            'tunjangan_keluarga' => ['required', 'numeric'],
            'tunjangan_khusus' => ['required', 'numeric'],
            'tunjangan_lembur_dan_makan' => ['required', 'numeric'],
            'tunjangan_kelebihan_mengajar' => ['required', 'numeric'],
            'tunjangan_kesra' => ['required', 'numeric'],
            'potongan_pph21' => ['required', 'numeric'],
            'potongan_pinjaman_koperasi' => ['required', 'numeric'],
            'potongan_sumbangan_kyy' => ['required', 'numeric'],
            'potongan_simpanan_wajib' => ['required', 'numeric'],
            'potongan_bpjs_kesehatan_dan_tenagakerjaan' => ['required', 'numeric'],
            'potongan_arisan' => ['required', 'numeric'],
            'potongan_dll' => ['required', 'numeric'],
        ]);
        $tunjangan_keluarga = $request->gaji_pokok * ($request->tunjangan_keluarga / 100);
        $validatedData['tunjangan'] = $request->tunjangan_jabatan + $tunjangan_keluarga + $request->tunjangan_khusus + $request->tunjangan_lembur_dan_makan + $request->tunjangan_kelebihan_mengajar + $request->tunjangan_kesra;

        $validatedData['potongan'] = (int)$request->potongan_pph21 + (int) $request->potongan_pinjaman_koperasi + (int) $request->potongan_sumbangan_kyy + (int)$request->potongan_simpanan_wajib + (int)$request->potongan_bpjs_kesehatan_dan_tenagakerjaan + (int)$request->potongan_arisan + (int) $request->potongan_dll;

        $validatedData['total'] = ($validatedData['gaji_pokok'] + $validatedData['tunjangan']) - $validatedData['potongan'];
        $validatedData['employee_id'] = $employee->id;
        $validatedData['tanggal'] = $dateOfSalary;

        $month = Carbon::createFromDate($dateOfSalary)->month;
        $year = Carbon::createFromDate($dateOfSalary)->year;
        $salary = Salary::where('employee_id', $employee->id)->whereMonth('tanggal', $month)->whereYear("tanggal", $year)->first();
        $user = User::where('id', $employee->user_id)->first();
        if (empty($salary)) {
            $salary = Salary::create($validatedData);
            $user->notify(new CreatedSuccessfully($user->name));
            Controller::sendWa($employee->phone, "Hi $user->name 👋.\n\nGaji anda di bulan $month / $year telah *ditambahkan* \n\nKlik link di bawah ini untuk mencetak laporan gaji\n" . url("/admin/reports/$salary->id/export"));
            $message = "Berhasil menambah gaji bulan $month / $year";
        } else {

            Controller::sendWa($employee->phone, "Hi $user->name 👋.\n\nGaji anda di bulan $month / $year telah *diupdate* \n\nKlik link di bawah ini untuk mencetak laporan gaji\n"  . url("/admin/reports/$salary->id/export"));
            $salary->update($validatedData);
            $user->notify(new UpdatedSuccessfully($user->name));

            $message = "Berhasil mengupdate gaji bulan $month / $year";
        }

        return redirect('/admin/salaries')->with('message', [
            'message' => $message,
            'data' => $employee->user,
            'status' => 'success'
        ]);
    }
}
