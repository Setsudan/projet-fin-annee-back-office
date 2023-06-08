<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;

class CommentResource extends JsonApiResource
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
                'content' => $this->content,
                'ticket_id' => $this->ticket_id,
            ],
            'relationships' => [
                'ticket',
            ],
        ]);
    }
}
