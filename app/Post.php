<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Encryptable;
use Crypt;

class Post extends Model
{
    // use Encryptable;

    // protected $encryptable = [
    //     'content'
    // ];

    public function setContentAttribute($value)
    {
        $this->attributes['content'] = Crypt::encrypt($value);
    }

    public function getContentAttribute($value)
    {
        // dd($value);
        return Crypt::decrypt($value);
    }

    //Posts relationship
    public function category() 
    {
        return $this->belongsTo('App\Category');
    }

    //User relationship
    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    //Comments relationship
    public function comments() 
    {
        return $this->hasMany('App\Comment');
    }

    //Photos relationship
    public function photo() 
    {
        return $this->hasOne('App\Photo');
    }

    //Tags relationship
    public function tags() 
    {
        return $this->belongsToMany('App\Tag');
    }
}
