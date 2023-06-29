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
            'data.users.*.email' => 'required|unique:users,email|email',
            'data.users.*.password' => 'required|string|min:5',
            'data.users.*.name' => 'required|string',
            'data.users.*.role' => 'required|string|in:monteur,traducteur,redacteur,controle_qualite',
        ];
    }
}
