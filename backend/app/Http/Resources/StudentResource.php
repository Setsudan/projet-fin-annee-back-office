<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class StudentResource extends JsonApiResource
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
            ],
            'relationships' => [
                'classrooms',
            ],
        ]);
    }
}
