<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BumikMailer;
use App\Models\Contacto;

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

        /*$contacto = new Contacto();
        $contacto->nombre = $request->nombre;
        $contacto->apellido = $request->apellido;
        $contacto->email = $request->email;
        $contacto->telefono = $request->telefono;
        $contacto->mensaje = $request->mensaje;
        $contacto->save();*/

        Mail::to('valeendiz@gmail.com')->send(new BumikMailer($validatedData));

        return response()->json(['message' => 'Formulario enviado correctamente'], 200);
    }
}
