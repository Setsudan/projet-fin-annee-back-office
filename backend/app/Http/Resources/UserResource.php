<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class UserResource extends JsonApiResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->attributesToArray([
            'attributes' => [
                'name' => $this->name,
                'email' => $this->email,
                'role' => $this->roles()->first()->name ?? null,
            ],
            'relationships' => [
                'avatar',
            ],
        ]);
    }
}
