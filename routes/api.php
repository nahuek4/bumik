<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IconsController;
use App\Http\Controllers\MarcasController;
use App\Http\Controllers\ProyectosController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('icons', [IconsController::class, 'getIcons']);
Route::get('marcas', [MarcasController::class, 'getMarcas']);
Route::get('proyectos', [ProyectosController::class, 'getProyectos']);