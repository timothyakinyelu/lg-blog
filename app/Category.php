<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //Posts relationship
    public function posts() 
    {
        return $this->hasMany('App\Post');
    }

    // //Comments relationship
    // public function comments() 
    // {
    //     return $this->hasManyThrough('App\Comment', 'App\Post');
    // }

    // //Childrens relationship
    // public function children()
    // {
    //     return $this->hasMany( 'App\Category', 'parent', 'id' );
    // }
    
    // //Parent relationship
    // public function parent()
    // {
    //     return $this->hasOne( 'App\Category', 'id', 'parent' );
    // }
}
