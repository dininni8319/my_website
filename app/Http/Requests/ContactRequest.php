<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'name' => 'required| max:50',
            'phone' => 'numeric',
            'message' => 'required| min:10| max:1000',
            'subject' =>'required| min:5'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'This field is required',
            'message.required' => 'This field is required',
            'subject.required' => 'This field is required',
            'email.required' => 'This field is required',
            'email.email' => 'Please enter a valid email format',
            'name.max' => 'You have exeeded the maximun number of characters',
            'phone.numeric' => 'Your phone number must be numeric',
            'message.max' => 'You have exeeded the maximun number of characters',
            'message.min' => 'You need to enter at least 10 characters',
            'subject.min' => 'You need to enter at least 10 characters',
        ];
    }
}
