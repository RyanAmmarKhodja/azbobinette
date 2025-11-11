<?php

namespace App\Http\Controllers;

use App\Models\Continent;
use Illuminate\Http\Request;

class ContinentController extends Controller
{

    public function continents(){
        return Continent::All();
    }

    public function store(Request $request){
        $continent = new Continent();
        $continent->name = $request->name;
        $continent->save();

        return response()->json(['message' => 'Continent created successfully', 'continent' => $continent], 201);
    }
}
