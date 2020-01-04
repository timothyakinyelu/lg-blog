<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $guarded = [
        'id',
    ];
    //Post relationship
    public function post() 
    {
        return $this->belongsTo('App\Post');
    }
}
