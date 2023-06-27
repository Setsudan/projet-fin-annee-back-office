<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class FileResource extends JsonApiResource
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
                'mime_type' => $this->mime_type,
                'name' => $this->name,
                'original_name' => $this->original_name,
                'size' => $this->size,
                'type' => $this->type,
            ],
            'relationships' => [],
        ]);
    }
}
