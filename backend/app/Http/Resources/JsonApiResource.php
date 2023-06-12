<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\JsonResource;

class JsonApiResource extends JsonResource
{
    /**
     * Prepare the resource for JSON serialization.
     *
     * @return array<string, mixed>
     */
    public function attributesToArray(array $data): array
    {
        return [
            'id' => $this->resource->getKey(),
            'type' => $this->resource->getTable(),
            'attributes' => $data['attributes'],
            'relationships' => $this->getResourceRelationships($data['relationships']),
        ];
    }

    public function getResourceRelationships(array $relationships): array
    {
        $relationshipsArray = [];

        foreach ($relationships as $relationship) {
            if (! method_exists($this->resource, $relationship)) {
                continue;
            }

            if (! $this->resource->{$relationship} instanceof Collection) {
                (! $this->resource->{$relationship})
                    ? $relationshipsArray[$relationship] = [
                        'data' => null,
                    ]
                    : $relationshipsArray[$relationship] = [
                        'data' => [
                            'id' => $this->resource->{$relationship}->getKey(),
                            'type' => $this->resource->{$relationship}->getTable(),
                        ],
                    ];
            } else {
                $relationshipsArray[$relationship] = [
                    'data' => $this->resource->{$relationship}->map(function ($item) {
                        return [
                            'id' => $item->getKey(),
                            'type' => $item->getTable(),
                        ];
                    }),
                ];
            }
        }

        return $relationshipsArray;
    }
}
