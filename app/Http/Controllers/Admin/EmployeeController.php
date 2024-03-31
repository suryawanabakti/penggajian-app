<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\Position;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(Request $request)
    {
        $employees = Employee::orderBy('created_at', 'desc');
        if ($request->search) {
            $employees->whereHas('user', function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%")
                    ->orWhere('email', 'like', "%$request->search%");;
            });
        }
        return Inertia::render('Admin/Employees/Index', [
            "employees" => $employees->paginate(10),
            "search" => $request->search
        ]);
    }

    public function create()
    {
        $positions = Position::all();
        return Inertia::render("Admin/Employees/Create", ["positions" => $positions]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|confirmed',
            'jabatan' => 'required',
            'alamat' => 'required',
            'nomor_handphone' => 'required',
            'waktu_bekerja' => 'required',
            'jenis_kelamin' => 'required',
            'nik' => ['required', 'nullable', 'numeric', 'unique:employees'],
            'nidn' => ['nullable', 'unique:employees']
        ]);

        $user = User::create([
            'name' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        try {
            Employee::create([
                'user_id' => $user->id,
                'nik' => $request->nik,
                'nidn' => $request->nidn,
                'position_id' => $request->jabatan,
                'address' => $request->alamat,
                'phone' => $request->nomor_handphone,
                'start_working' => $request->waktu_bekerja,
                'gender' => $request->jenis_kelamin,
            ]);
        } catch (Exception $e) {
            $user->delete();
        }

        $user->assignRole("user");

        return redirect('/admin/employees')->with('message', [
            'message' => ' Berhasil Tambah Pegawai',
            'data' => $user,
            'status' => 'success'
        ]);
    }

    public function edit(Employee $employee)
    {
        $positions = Position::all();
        return Inertia::render("Admin/Employees/Edit", ["positions" => $positions, "employee" => $employee]);
    }

    public function update(Request $request, Employee $employee)
    {
        $request->validate([
            'nama' => 'required|max:255',
            'email' => 'required|email|unique:users,email,' . $employee->user->id,
            'jabatan' => 'required',
            'alamat' => 'required',
            'nomor_handphone' => 'required',
            'waktu_bekerja' => 'required',
            'jenis_kelamin' => 'required',
            'nik' => ['nullable', 'numeric', 'unique:employees,nik,' . $employee->id],
            'nidn' => ['nullable', 'unique:employees,nidn,' . $employee->id]
        ]);

        User::where('id', $employee->user_id)->update([
            'name' => $request->nama,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender' => $request->jenis_kelamin
        ]);
        if ($request->password) {
            $request->validate([
                'password' => 'confirmed|required'
            ]);
            User::where('id', $employee->user_id)->update([
                'password' => Hash::make($request->password)
            ]);
        }

        $employee->update([
            'position_id' => $request->jabatan,
            'address' => $request->alamat,
            'phone' => $request->nomor_handphone,
            'start_working' => $request->waktu_bekerja,
            'nik' => $request->nik,
            'nidn' => $request->nidn,
        ]);

        Controller::sendWa($employee->phone, "Hi {$employee->user->name}.\nAkun penggajian anda telah di update oleh Admin UNITAMA 😁 \n");

        return redirect('/admin/employees')->with('message', [
            'message' => ' Berhasil Edit Pegawai',
            'data' => $employee->user,
            'status' => 'success'
        ]);
    }

    public function destroy(Employee $employee)
    {
        activity()
            ->withProperties($employee)
            ->log('Anda telah menghapus karyawan ' . $employee->user->name);

        User::where('id', $employee->user_id)->delete();
        $employee->delete();
        return back()->with('message', [
            'message' => '🗑️ Berhasil Hapus Pegawai',
            'data' => "",
            'status' => 'success'
        ]);
    }
}
