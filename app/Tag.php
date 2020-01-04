<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //Posts relationship
    public function posts() 
    {
        return $this->belongsToMany('App\Post');
    }
}