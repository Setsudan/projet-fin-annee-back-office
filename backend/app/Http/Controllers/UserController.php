<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function store(StoreUserRequest $request)
    {
        $validated = $request->validated();

        $userArray = [];

        foreach ($validated['data']['users'] as $attributes) {
            $user = new User();

            $attributes['password'] = Hash::make($attributes['password']);

            $user->fill($attributes);

            $user->save();

            $roles = Role::firstWhere('name', $attributes['role']);

            $user->roles()->attach($roles);

            $userArray[] = $user;
        }

        return UserResource::collection($userArray);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function index()
    {
        $users = User::all();

        return UserResource::collection($users);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $validated = $request->validated();

        if (isset($validated['data'])) {
            $user->update($validated['data']['attributes']);
        }

        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->noContent();
    }
}
