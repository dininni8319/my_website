<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PublicController extends Controller
{
    public function index() {

        return view('home');
    }

    public function submit(Request $request) {
          //   dd($request->all());
          $name = $request->input('name');
          $email = $request->input('email');
          $myEmail = 's.dininni@yahoo.com';
          $phone = $request->input('phone');
          $subject = $request->input('subject');
          $message = $request->input('message');
        
          $contact = compact('name', 'email', 'phone', 'subject', 'message');
          //   dd($contact);
          Mail::to($myEmail)->send(new ContactMail($contact));

          return redirect(route('homepage'));
    }

    public function projectsDetails(){

      return view('detail');
    }

    // public function gameRoom(){

    //   return view('gameroom');
    // }
}
