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

        return back()->with("status", "Votre famille a été sauvegardée avec success");

    }

    public function show($id){
        return Family::findOrFail($id);
    }

    public function update($id, Request $request){
        $family = Family::find($id);
        $family->name= $request->input("name");
        $family->description = $request->input("description");

        $family->update();
        return back()->with("status", "Votre famille a été sauvegardée avec success");
    }

    public function delete($id)
    {
        $family = Family::find($id);
        $family->delete();
        return back()->with("status", "Votre famille a été supprimée avec succés");
    }
}
