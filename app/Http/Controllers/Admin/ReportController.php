<?php

namespace App\Http\Controllers\Admin;

use App\Exports\Admin\SalaryExport;
use App\Http\Controllers\Controller;
use App\Models\Salary;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

use function Spatie\LaravelPdf\Support\pdf;

class ReportController extends Controller
{
    public function index()
    {
        $month = Carbon::now()->month;
        $year = Carbon::now()->year;

        return Inertia::render("Admin/Reports/Index", ["month" => $month, "year" => $year]);
    }

    public function show(Request $request)
    {
        $salaries = Salary::with('employee.user')->whereHas('employee.user')->whereMonth('tanggal', $request->bulan)->whereYear('tanggal', $request->tahun)->get();

        return Inertia::render("Admin/Reports/Show", [
            "year" => $request->tahun,
            "month" => $request->bulan,
            "salaries" => $salaries,
            "totalSalary" => $salaries->sum('total')
        ]);
    }

    public function export(Salary $salary)
    {
        // return Excel::download(new SalaryExport($salary), 'salary.xlsx');
        return $pdf = Pdf::loadView('exports.pdf.salary', compact('salary'))->stream();
    }
}
