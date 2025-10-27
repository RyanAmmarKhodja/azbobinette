<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    public function continent() {
    return $this->belongsToMany(Continent::class, 'animal_continent');
}
}
