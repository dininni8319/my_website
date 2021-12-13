<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;


    public $contact;
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        $contact = $this->contact;
        $email = $contact['email'];
        // dd($email);
        return $this
           ->from($email)
           ->view('mail.contact', compact('contact'));
    }
}
