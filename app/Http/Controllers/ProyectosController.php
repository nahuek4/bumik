<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proyectos;
class ProyectosController extends Controller
{
    public function getProyectos(){
        $proyectos = Proyectos::all();
        return response()->json($proyectos);
    }

}
