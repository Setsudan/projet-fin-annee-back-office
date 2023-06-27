<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class OrchestreResource extends JsonApiResource
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
                'nombreDeMembre' => $this->nombreDeMembre,
                'hasBeenInvited' => $this->hasBeenInvited,
            ],
            'relationships' => [],
        ]);
    }
}
