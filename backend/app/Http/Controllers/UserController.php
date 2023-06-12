<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'email' => $validated['data']['attributes']['email'],
            'password' => Hash::make($validated['data']['attributes']['password']),
            'name' => $validated['data']['attributes']['name'],
        ]);

        return new UserResource($user);
    }
}
