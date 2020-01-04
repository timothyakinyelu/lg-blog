<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewCommentRequest;

use App\Comment;
use App\Post;

class CommentsController extends Controller
{
    public function index() 
    {
        /*
        |-------------------------------------------------------------------------------
        | Get All Comments
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/comments
        | Method:         GET
        | Description:    Gets all the comments of the post
        */
        $comments = Comment::orderBy('updated_at', 'desc')
                        ->get();

        return response()->json([
            'comments' => $comments
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Adds a New Comment
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/comments
    | Method:         POST
    | Description:    Adds a new comment to the post
    */
    public function store(NewCommentRequest $request) 
    {
        // dd($request->all());
        $post_id = $request->input('post_id');
        $post = Post::find($post_id);

        $comment = new Comment();

        $comment->post_id = $post->id;
        $comment->name = $request->name;
        $comment->email = $request->email;
        $comment->comment = $request->comment;
        $comment->approved = true;

        $comment->save();

        return response()->json([
            'status' => 'Comment submitted!'
        ]);
    }

    public function edit() 
    {

    }

    public function update() 
    {

    }

    public function destroy() 
    {

    }
}
