<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PositionController extends Controller
{
    public function index()
    {
        $positions = Position::orderBy('created_at', 'desc')->get();
        return Inertia::render('Admin/Positions/Index', compact('positions'));
    }

    public function create()
    {
        return Inertia::render("Admin/Positions/Create");
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|max:255',
        ]);

        $position = Position::create([
            'name' => $request->nama,
        ]);

        return redirect('/admin/positions')->with('message', [
            'message' => ' Berhasil Tambah Jabatan',
            'data' => $position,
            'status' => 'success'
        ]);
    }

    public function edit(Position $position)
    {

        return Inertia::render("Admin/Positions/Edit", ["position" => $position]);
    }

    public function update(Request $request, Position $position)
    {
        $request->validate([
            'nama' => 'required|max:255',

        ]);

        $position->update(['name' => $request->nama]);

        return redirect('/admin/positions')->with('message', [
            'message' => ' Berhasil Edit Jabatan',
            'data' => $position,
            'status' => 'success'
        ]);
    }

    public function destroy(Position $position)
    {
        activity()
            ->withProperties($position)
            ->log('Anda telah menghapus jabatan ' . $position->name);

        $position->delete();

        return back()->with('message', [
            'message' => 'Berhasil Menghapus Jabatan',
            'data' => $position,
            'status' => 'success'
        ]);
    }
}
