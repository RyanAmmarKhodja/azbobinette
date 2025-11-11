<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;

class AnimalController extends Controller
{
    public function index()
    {
        $animals = Animal::with(['family', 'continents'])->get();

        return $animals;
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'family_id' => 'nullable|exists:families,id',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'continents' => 'array',
            'continents.*' => 'exists:continents,id',
        ]);

        $imagePath = null;

        if ($request->hasFile('photo')) {
            $imagePath = $request->file('photo')->store('animals', 'public');
            $validated['image_path'] = $imagePath;
        }

        $animal = Animal::create([
            'name' => $validated['name'],
            'family_id' => $validated['family_id'] ?? null,
            'image_path' => $imagePath,
            'description' => $validated['description'] ?? null,
        ]);

        if (!empty($validated['continents'])) {
            $animal->continents()->sync($validated['continents']);
        }

        return response()->json([
            'message' => 'Animal created successfully!',
            'animal' => $animal->load('continents', 'family'),
        ]);
    }

    public function show($id)
    {
        $animal = Animal::findOrFail($id);
        return $animal;
    }

    public function take()
    {
        $animals = Animal::take(4)->get();
        return response()->json($animals);
    }

    // Show the form for editing the specified animal.

    public function edit($id)
    {
        $animal = Animal::findOrFail($id);
        return view('animals.edit')->with("animal", $animal);
    }


    public function update(Request $request, $id)
    {
        $animal = Animal::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'family_id' => 'nullable|exists:families,id',
            'description' => 'nullable|string',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:2048',
            'continents' => 'array',
            'continents.*' => 'exists:continents,id',
        ]);

        if ($request->hasFile('photo')) {
            $imagePath = $request->file('photo')->store('animals', 'public');
            $validated['image_path'] = $imagePath;
        }

        if (!empty($validated['continents'])) {
            $animal->continents()->sync($validated['continents']);
        }


        $animal->update($validated);

        return response()->json(['message' => 'Animal updated successfully', 'animal' => $animal->load('family', 'continents')], 200);
    }

    public function delete($id)
    {
        $animal = Animal::findOrFail($id);
        $animal->delete();

        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
