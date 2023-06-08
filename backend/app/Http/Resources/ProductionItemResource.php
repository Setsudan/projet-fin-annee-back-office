<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class ProductionItemResource extends JsonApiResource
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
                'description' => $this->description,
                'quantity' => $this->quantity,
                'state' => $this->state,
                'type' => $this->type,
            ],
            'relationships' => [],
        ]);
    }
}
