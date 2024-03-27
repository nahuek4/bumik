<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactoController extends Controller
{
    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'apellido' => 'required|string|max:255',
            'email' => 'required|email',
            'telefono' => 'nullable|string|max:255',
            'mensaje' => 'required|string',
        ]);

        return response()->json(['message' => 'Formulario enviado correctamente'], 200);
    }
}
