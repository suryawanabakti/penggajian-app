<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\Admin\EmployeeController;
use App\Http\Controllers\Admin\PositionController;
use App\Http\Controllers\Admin\SalaryController as AdminSalaryController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use App\Notifications\CreatedSuccessfully;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\ReportController as AdminReportController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/send-notification', function () {
    User::find(auth()->user()->id)->notify(new CreatedSuccessfully("Sword"));
    return "Successfully";
});

Route::get('/notifications', [NotificationController::class, 'index']);
Route::get('/notifications/{notification}', [NotificationController::class, 'show']);
Route::post('/notifications/mark-all-as-read', [NotificationController::class, 'markAllAsRead']);

Route::get('/dashboard', function () {
    /** @var \App\Models\User */
    $user = Auth::user();
    if ($user->hasRole('admin')) {
        return redirect('/admin/dashboard');
    } else {
        return redirect('/user/dashboard');
    }
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('admin.dashboard');

Route::get('/user/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('user.dashboard');



Route::middleware('auth')->group(function () {
    // Auth 
    Route::get('/activities', [ActivityController::class, 'index']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin
    Route::middleware('role:admin')->group(function () {
        Route::get('/admin/employees', [EmployeeController::class, 'index'])->name('admin.employees.index');
        Route::get('/admin/employees/create', [EmployeeController::class, 'create'])->name('admin.employees.create');
        Route::post('/admin/employees', [EmployeeController::class, 'store'])->name('admin.employees.store');
        Route::get('/admin/employees/{employee}/edit', [EmployeeController::class, 'edit'])->name('admin.employees.edit');
        Route::put('/admin/employees/{employee}', [EmployeeController::class, 'update'])->name('admin.employees.update');
        Route::delete('/admin/employees/{employee}', [EmployeeController::class, 'destroy'])->name('admin.employees.destroy');

        Route::get('/admin/positions', [PositionController::class, 'index'])->name('admin.positions.index');
        Route::get('/admin/positions/create', [PositionController::class, 'create'])->name('admin.positions.create');
        Route::post('/admin/positions', [PositionController::class, 'store'])->name('admin.positions.store');
        Route::get('/admin/positions/{position}/edit', [PositionController::class, 'edit'])->name('admin.positions.edit');
        Route::put('/admin/positions/{position}', [PositionController::class, 'update'])->name('admin.positions.update');
        Route::delete('/admin/positions/{position}', [PositionController::class, 'destroy'])->name('admin.positions.destroy');

        Route::get('/admin/salaries', [AdminSalaryController::class, 'index'])->name('admin.salaries.index');
        Route::get('/admin/salaries/employee/{employee}/date-of-salary/{dateOfSalary}', [AdminSalaryController::class, 'show'])->name('admin.salaries.show');
        Route::post('/admin/salaries/employee/{employee}/date-of-salary/{dateOfSalary}', [AdminSalaryController::class, 'store'])->name('admin.salaries.store');

        Route::get('/admin/reports', [AdminReportController::class, 'index'])->name('admin.reports.index');
    });
});

require __DIR__ . '/auth.php';
