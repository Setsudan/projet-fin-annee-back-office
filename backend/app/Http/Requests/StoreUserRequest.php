<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
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
            'data.attributes.email' => 'required|unique:users,email|email',
            'data.attributes.password' => 'required|string|min:5',
            'data.attributes.name' => 'required|string',
            'data.attributes.role' => 'required|string|in:monteur,traducteur,redacteur,controle_qualite',
        ];
    }
}
