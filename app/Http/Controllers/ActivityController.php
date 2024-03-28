<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $activities = Activity::where('causer_id', auth()->id())->get();
        return Inertia::render('Activities', ["activities" => $activities]);
    }
}
