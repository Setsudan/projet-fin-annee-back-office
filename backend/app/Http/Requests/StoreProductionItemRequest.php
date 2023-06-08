<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductionItemRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'data.attributes.description' => 'required|string',
            'data.attributes.type' => 'required|string',
            'data.attributes.quantity' => 'required|integer',
            'data.attributes.state' => 'required|string',
        ];
    }
}
