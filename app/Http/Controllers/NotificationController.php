<?php

namespace App\Http\Controllers;

use Illuminate\Notifications\DatabaseNotification;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        return Inertia::render("Notifications/Index", [
            "notifications" => auth()->user()->notifications
        ]);
    }

    public function show(DatabaseNotification $notification)
    {
        $notification->markAsRead();

        return Inertia::render("Notifications/Show", [
            "notification" => $notification
        ]);
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();
        return back()->with('message', [
            'message' => 'Mark all as read',
            'data' => null,
            'status' => 'success'
        ]);;
    }
}
