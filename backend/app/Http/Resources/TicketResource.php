<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class TicketResource extends JsonApiResource
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
                'status' => $this->status,
                'description' => $this->description,
            ],
            'relationships' => [],
        ]);
    }
}
