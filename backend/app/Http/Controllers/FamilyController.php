<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Family;

class FamilyController extends Controller
{
    public function index(){

        return Family::All();
    }

    public function store(Request $request){
        $family = new Family();
        $family->name = $request->input("name");
        $family->description = $request->input("description");

        $family->save();

        return response()->json(['message' => 'Family created successfully', 'family' => $family], 201);

    }

    public function show($id){
        return Family::findOrFail($id);
    }

    public function update($id, Request $request){
        $family = Family::find($id);
        $family->name= $request->input("name");
        $family->description = $request->input("description");

        $family->update();
        return response()->json(['message' => 'Family updated successfully', 'family' => $family], 200);
    }

    public function delete($id)
    {
        $family = Family::find($id);
        $family->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
