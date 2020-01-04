<?php

namespace App\Policies;

use App\User;
use App\Post;
use Illuminate\Auth\Access\HandlesAuthorization;

class PostPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Only admin user can create posts
     *
     * @param \App\User  $user
    */
    public function create( User $user )
    {
        if( $user->permission == 1 ){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Only admin can update
     *
     * @param \App\User  $user
     * @param \App\Post  $post
    */
    public function update( User $user, Post $post )
    {
        if( $user->permission == 1 ){
            return true;
        }else{
            return false;
        }
    }
    
    /**
     * Only admin can delete a post
     *
     * @param \App\User  $user
     * @param \App\Post     $post
    */
    public function delete( User $user, Post $post )
    {
        if( $user->permission == 1 ){
            return true;
        }else{
            return false;
        }
    }
}
