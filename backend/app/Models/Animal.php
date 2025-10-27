<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $fillable = [
        'name',
        'family_id',
        'description',
        'age',
        'photo',
    ];

    
    public function animals() {
    return $this->belongsToMany(Animal::class, 'animal_continent');
}
}
