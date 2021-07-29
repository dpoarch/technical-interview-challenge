<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BreedController extends Controller
{
    public function show(){
        $breeds = array();

        $images = \File::allFiles(public_path('images'));

        foreach($images as $key => $image){

            $id = $key;
            $name = pathinfo($image->getFilename())['filename'];
            $breeds[] = ['id' => $id, 'name'=> ucfirst(str_replace('_', ' ', $name)), 'filename' => $image->getFilename()];
        }


        return response()->json([
            'breeds' => $breeds
        ]);
    }
}
