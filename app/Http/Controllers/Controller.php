<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Http;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function sendWa($noWa, $message)
    {
        Http::withHeader("Authorization", config("fonte.token"))->post("https://api.fonnte.com/send", [
            'target' => $noWa,
            'message' => $message,
            'countryCode' => '62', //optional
        ]);
    }
}
