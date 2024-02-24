<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Icon;
class IconsController extends Controller
{
    public function getIcons(){
        $icons = Icon::all();
        return response()->json($icons);
    }
}
