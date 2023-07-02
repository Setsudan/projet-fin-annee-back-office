<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFileRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        if ($this->input('data.attributes.url') !== null) {
            return [
                'data.attributes.url' => 'required|string|url',
            ];
        }

        return [
            'file' => 'required|file',
            'type' => 'required|string|in:audio,video,avatar,document',
        ];
    }
}
