<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
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

        $employees = Employee::all()->map(function ($employee) use ($month, $year) {
            $salary = Salary::whereMonth('tanggal', $month)->whereYear('tanggal', $year)->where('employee_id', $employee->id)->first();
            return [
                "id" => $employee->id,
                "nama" => $employee->user->name,
                "jabatan" => $employee->position->name,
                "salary" => $salary
            ];
        });

        return Inertia::render("Admin/Salary/Index", ["employees" => $employees, "dateOfSalary" => $dateOfSalary, "month" => $month, "year" => $year]);
    }

    public function show(Employee $employee, $dateOfSalary)
    {
        $salary = Salary::whereMonth('tanggal', Carbon::createFromDate($dateOfSalary)->month)->where('employee_id', $employee->id)->first();
        return Inertia::render("Admin/Salary/Show", [
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
            'tunjangan' => ['required', 'numeric'],
            'pph21' => ['required', 'numeric'],
            'arisan' => ['required', 'numeric'],
            'kelebihan' => ['required', 'numeric'],
            'lembur' => ['required', 'numeric'],
            'makan' => ['required', 'numeric'],
            'kesra' => ['required', 'numeric'],
        ]);
        $pendapatan = $request->gaji_pokok + $request->tunjangan + $request->kelebihan;
        $potongan = $request->pph21 + $request->arisan + $request->lembur + $request->makan + $request->kesra;

        $validatedData['total'] = $pendapatan - $potongan;
        $validatedData['employee_id'] = $employee->id;
        $validatedData['tanggal'] = $dateOfSalary;

        $month = Carbon::createFromDate($dateOfSalary)->month;
        $year = Carbon::createFromDate($dateOfSalary)->year;
        $salary = Salary::where('employee_id', $employee->id)->whereMonth('tanggal', $month)->whereYear("tanggal", $year);
        $user = User::where('id', $employee->user_id)->first();
        if ($salary->count() == 0) {
            Salary::create($validatedData);
            $user->notify(new CreatedSuccessfully($user->name));
            Controller::sendWa($employee->phone, "Hi $user->name 👋.\n\nGaji anda di bulan $month / $year telah *ditambahkan*");
        } else {
            $salary->update($validatedData);
            $user->notify(new UpdatedSuccessfully($user->name));
            Controller::sendWa($employee->phone, "Hi $user->name 👋.\n\nGaji anda di bulan $month / $year telah *diupdate*");
        }

        return back();
    }
}
