<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Icon;
class IconsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = json_decode(file_get_contents(base_path('resources/data/data.json')), true);
        foreach($data as $d){
            Icon::create([
                'servicio' => $d['servicio'],
                'descripcion' => $d['descripcion'],
                'imagen' => $d['imagen']
            ]);
        }
    }
}
?>