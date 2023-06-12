<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'data.attributes.email' => ['required'],
            'data.attributes.password' => ['required'],
        ]);

        if (Auth::attempt($credentials['data']['attributes'])) {
            $user = User::where('email', $credentials['data']['attributes']['email'])->first();

            $request->session()->regenerate();

            return response()->json([
                'user' => new UserResource($user),
            ]);
        }

        return response()->json([
            'errors' => [
                'status' => 401,
                'title' => 'Unauthorized',
                'detail' => 'Invalid credentials.',
            ],
        ], 401);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
