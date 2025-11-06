<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Animal extends Model
{
    protected $fillable = [
        'name',
        'family_id',
        'description'
    ];

    public function family()
    {
        return $this->belongsTo(Family::class);
    }

    public function continents()
    {
        return $this->belongsToMany(Continent::class, 'animal_continent');
    }
}
