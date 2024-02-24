<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Marcas;
class MarcasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(base_path('resources/data/imagenes.json')), true);
        foreach($data as $d){
            Marcas::create([
                'marca' => $d['marca'],
                'imagen' => $d['imagen']
            ]);
        }
    }
}
