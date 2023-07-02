<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRelationshipRequest;
use App\Http\Resources\UserResource;
use App\Models\File;
use App\Models\User;

class UserRelationshipController extends Controller
{
    public function update(
        UpdateUserRelationshipRequest $request,
        User $user,
        string $relationship
    ) {
        $validated = $request->validated();

        if ($relationship === 'avatar') {
            $file = File::findOrFail($validated['data']['id']);

            $user->avatar_id = $file->id;

            $user->save();
        }

        return new UserResource($user);
    }
}
