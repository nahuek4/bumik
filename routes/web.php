<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactoController;
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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/servicios', function () {
    return view('servicios');
});
Route::get('/portfolio', function () {
    return view('portfolio');
});
Route::get('/contacto', function () {
    return view('contacto');
});
Route::post('/submitForm', [ContactoController::class,'submitForm'])->name('contact.submit');