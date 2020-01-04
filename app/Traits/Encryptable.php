<?php

namespace App\Traits;

use Crypt;

trait Encryptable
{
    /**
     * If the attribute is in the encryptable array
     * then decrypt it.
     *
     * @param  $key
     *
     * @return $value
     */
    public function getContentAttribute($key)
    {
        $value = parent::getAttribute($key);
        dd($value);

        if (in_array($key, $this->encryptable)) {
            $value = Crypt::decrypt($this->attributes[$key]);
            
            return $value;
        }
        return $value;
    }
    /**
     * If the attribute is in the encryptable array
     * then encrypt it.
     *
     * @param $key
     * @param $value
     */
    public function setContentAttribute($key, $value)
    {
        if (in_array($key, $this->encryptable)) {
            $value = Crypt::encrypt($value);
        }

        return parent::setAttribute($key, $value);
    }
    /**
     * When need to make sure that we iterate through
     * all the keys.
     *
     * @return array
     */
    // public function attributesToArray()
    // {
    //     $attributes = parent::attributesToArray();

    //     foreach ($attributes as $key => $value)
    //     {
    //         if (in_array($key, $this->encryptable))
    //         {
    //             $attributes[$key] = Crypt::decrypt($value);
    //         }
    //     }

    //     return $attributes;
    // }
    // public function attributesToArray()
    // {
    //     $attributes = parent::attributesToArray();
    //     foreach ($this->encryptable as $key) {
    //         if (isset($attributes[$key])) {
    //             $attributes[$key] = Crypt::decrypt($attributes[$key]);
    //         }
    //     }
    //     return $attributes;
    // }
}