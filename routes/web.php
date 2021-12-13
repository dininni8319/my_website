<?php

use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () { return view('welcome');
// });
Route::get('/',[PublicController::class, 'index'])->name('homepage'); 

Route::post('/contact/submit',[PublicController::class, 'submit'])->name('contact.submit');

// Route::get('/game_room',[PublicController::class, 'gameRoom'])->name('game.room');

Route::get('/projects/detail',[PublicController::class, 'projectsDetails'])->name('projects.details');
