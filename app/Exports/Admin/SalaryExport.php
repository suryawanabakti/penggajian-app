<?php

namespace App\Exports\Admin;

use App\Models\Salary;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class SalaryExport implements FromView
{
    protected $salary;
    public function __construct($salary)
    {
        $this->salary = $salary;
    }

    public function view(): View
    {
        return view('exports.salary', [
            'salary' => $this->salary
        ]);
    }
}
