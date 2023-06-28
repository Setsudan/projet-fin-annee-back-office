<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        $validated = $request->validated();

        $user = new User();

        $user->fill($validated['data']['attributes']);

        $user->password = Hash::make($validated['data']['attributes']['password']);

        $user->save();

        $roles = Role::firstWhere('name', $validated['data']['attributes']['role']);

        $user->roles()->attach($roles);

        return new UserResource($user);
    }
}
