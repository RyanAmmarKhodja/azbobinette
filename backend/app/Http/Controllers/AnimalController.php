<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;

class AnimalController extends Controller
{
    public function index(){
        return Animal::All();
    }

    public function store(Request $request)
    {

         $validated = $request->validate([
            'name' => 'required|string|max:255',
            'family_id' => 'nullable|integer',
            'description' => 'nullable|string'
        ]);
        
        // Handle file upload (if any)
        // if ($request->hasFile('photo')) {
        //     $path = $request->file('photo')->store('animals', 'public');
        //     $validated['photo'] = $path;
        // }

        Animal::create($validated);

        return back()->with("status", "Votre Animal a été envoyé avec success");
    }

    public function show($id)
    {
        $animal = Animal::findOrFail($id);
        return $animal;
    }
    

    // Show the form for editing the specified animal.
     
    public function edit($id)
    {
        $animal = Animal::findOrFail($id);
        return view('animals.edit')->with("animal",$animal);
    }


    public function update(Request $request, $id)
    {
        $animal = Animal::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'family_id' => 'required|integer',
            'description' => 'nullable|string',
        ]);

        $animal->update($validated);

        return back()->with('success', 'Animal updated successfully!');
    }

    public function delete($id)
    {
        $animal = Animal::findOrFail($id);
        $animal->delete();

        return back()->with('success', 'Animal deleted successfully!');
    }
}
