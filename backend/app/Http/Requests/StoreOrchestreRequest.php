<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrchestreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'data.attributes.name' => 'required|string',
            'data.attributes.email' => 'required|unique:orchestres,email|email',
            'data.attributes.nombreDeMembre' => 'required|integer',
            'data.attributes.hasBeenInvited' => 'required|boolean',
        ];
    }
}
