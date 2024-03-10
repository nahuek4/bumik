<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Proyectos;
class ProyectosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(base_path('resources/data/proyectos.json')), true);
        foreach($data as $d){
            Proyectos::create([
                'imagen' => $d['imagen'],
                'alt' => $d['alt'],
                'type'=> $d['type'],
            ]);
        }
    }
}
