<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductionItemRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'data.attributes.description' => 'string',
            'data.attributes.type' => 'string',
            'data.attributes.quantity' => 'integer',
            'data.attributes.state' => 'string',
        ];
    }
}
