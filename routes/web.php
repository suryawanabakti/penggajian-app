<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\Admin\UserController as AdminUserController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use App\Notifications\CreatedSuccessfully;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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
})->middleware(['auth', 'verified', 'role:admin'])->name('dashboard');


Route::middleware('auth')->group(function () {
    // Auth 
    Route::get('/activities', [ActivityController::class, 'index']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Admin
    Route::middleware('role:admin')->group(function () {
        Route::get('/admin/users', [AdminUserController::class, 'index'])->name('admin.users.index');
    });
});

require __DIR__ . '/auth.php';
