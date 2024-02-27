<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Marcas;
class MarcasController extends Controller
{
    public function getMarcas(){
        $marcas = Marcas::all();
        return response()->json($marcas);
    }
}
