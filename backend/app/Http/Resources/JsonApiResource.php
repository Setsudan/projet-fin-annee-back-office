<?php

namespace App\Http\Resources;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class JsonApiResource extends JsonResource
{
    private bool $includingRelationships;

    public function __construct($resource, bool $includingRelationships = true)
    {
        parent::__construct($resource);

        $this->includingRelationships = $includingRelationships;
    }

    /**
     * Prepare the resource for JSON serialization.
     *
     * @return array<string, mixed>
     */
    public function attributesToArray(array $data): array
    {
        $includes = $this->resource->includes ?? [];

        return [
            'id' => $this->resource->getKey(),
            'type' => $this->resource->getTable(),
            'attributes' => $this->filterNullValues($data['attributes']),
            'relationships' => $this->getResourceRelationships($data['relationships']),
            $this->mergeWhen($this->includingRelationships === true, [
                'included' => $this->getResourceIncludedRelationship($includes),
            ]),
        ];
    }

    /**
     * Add included data to the resource.
     *
     *
     * @return mixed
     */
    public function addIncludeData(string $include, bool $isCollection = false)
    {
        if ($isCollection === true && $this->resource->{$include}->isNotEmpty()) {
            $resource = $this->getResourceClassPath($include);

            if (class_exists($resource)) {
                return $this->resource->{$include}->map(function ($item) use ($resource) {
                    return new $resource($item, false);
                });
            }
        }

        if ($isCollection === false && $this->resource->{$include} !== null) {
            $resource = $this->getResourceClassPath($include);

            if (class_exists($resource)) {
                return new $resource($this->resource->{$include}, false);
            }
        }

        return ($isCollection === true) ? [] : null;
    }

    /**
     * Filter null values from the resource.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    public function filterNullValues(array $data): array
    {
        return array_filter($data, function ($value) {
            return ! is_null($value);
        });
    }

    /**
     * Get the resource class full path.
     */
    private function getResourceClassPath(string $include): string
    {
        $resource = ($this->resource->{$include} instanceof Collection)
            ? $this->resource->{$include}->first()
            : $this->resource->{$include};

        return 'App\\Http\\Resources\\'.Str::afterLast(get_class($resource), '\\').'Resource';
    }

    /**
     * Get the resource included relationships.
     *
     * @param  array<string>  $includes
     * @return array<string, mixed>
     */
    public function getResourceIncludedRelationship(array $includes): array
    {
        $array = [];

        foreach ($includes as $include) {
            if (method_exists($this->resource, $include)) {
                $array[$include] = ($this->resource->{$include} instanceof Collection)
                    ? $this->addIncludeData($include, true)
                    : $this->addIncludeData($include);
            }
        }

        return $array;
    }

    /**
     * Get the resource relationships.
     *
     * @param  array<string>  $relationships
     * @return array<string, mixed>
     */
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
