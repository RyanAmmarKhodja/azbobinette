<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\FamilyController;
use App\Http\Controllers\ContinentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



// Animal Controller
Route::get('/animals', [AnimalController::class, 'index']);
Route::get('/animals/{id}', [AnimalController::class, 'show']); // show specific animal
Route::post('/animals/create', [AnimalController::class, 'store']);
Route::get('/animals/edit/{id}', [AnimalController::class, 'edit']);  // returns edit dashboard
Route::put('/animals/update/{id}', [AnimalController::class, 'update']);  // updates model
Route::delete('/animals/delete/{id}', [AnimalController::class, 'delete']);



// Family Controller
Route::get('/family', [FamilyController::class, 'index']);
Route::get('/family/{id}', [FamilyController::class, 'show']);
Route::post('/family/create', [FamilyController::class, 'store']);
Route::get('/family/edit/{id}', [FamilyController::class, 'edit']);
Route::put('/family/update/{id}', [FamilyController::class, 'update']);
Route::delete('/family/delete/{id}', [FamilyController::class, 'delete']);


// Continents
Route::get('/continents',[ContinentController::class, 'continents']);