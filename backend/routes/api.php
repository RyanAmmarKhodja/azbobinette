<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/animals', [AnimalController::class, 'index'])->name('animals.index');
Route::get('/animals/create', [AnimalController::class, 'create'])->name('animals.create');
Route::post('/animals/delete/{$id}', [AnimalController::class, 'store'])->name('animals.store');
Route::post('/animals/update/{$id}', [AnimalController::class, 'store'])->name('animals.store');
Route::post('/animals/edit/{$id}', [AnimalController::class, 'store'])->name('animals.store');

