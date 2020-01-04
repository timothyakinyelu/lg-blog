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

    // //Photos relationship
    // public function photos() 
    // {
    //     return $this->hasManyThrough('App\Photo', 'App\Post');
    // }

    // //Tags relationship
    // public function tags() 
    // {
    //     return $this->hasManyThrough(
    //         'App\Tag', // The model to access to
    //         'App\PostTag', // The intermediate table that connects the User with the Podcast.
    //         'tag_id',
    //         'post_id'
    //         // 'post_id',
    //         // 'tag_id',
    //     );
    // }

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
