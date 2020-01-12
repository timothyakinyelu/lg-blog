<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    //Posts relationship
    public function posts() 
    {
        return $this->hasMany('App\Post');
    }

    public function setSlugAttribute($value) {
        // grab the title and slugify it
        $this->attributes['slug'] = Str::slug($this->name);
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
