<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use \Illuminate\Support\Facades\URL;
use App\Http\Requests\NewPostRequest;
use App\Http\Requests\UpdatePostRequest;
use Carbon\Carbon;
use App\Post;
use App\Photo;
use App\ckImage;
use File;
use Auth;
use Storage;

class PostsController extends Controller
{
    /*
    |-------------------------------------------------------------------------------
    | Get All Posts
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts
    | Method:         GET
    | Description:    Gets all of the posts in the application
    */
    public function index()
    {
        $status = 'published';

        $posts = Post::where('status', '=', $status)
                ->with('photo')
                ->with('category')
                ->with('tags')
                ->withCount('comments')
                ->orderBy('updated_at', 'DESC')
                ->paginate(5);

        return response()->json([
            'posts' => $posts
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Get All Drafts
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts
    | Method:         GET
    | Description:    Gets all of the drafts in the application
    */
    public function drafts()
    {
        $status = 'draft';

        $posts = Post::where('status', '=', $status)
                ->with('category')
                ->with('tags')
                ->withCount('comments')
                ->get();

        // dd($posts);
        return response()->json([
            'posts' => $posts
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Get Recent Posts with attachments
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/recent
    | Method:         GET
    | Description:    Gets recent posts with all its attachments
    | 
    */
    public function recent()
    {
        $published = 'published';
        $posts = Post::where('status', '=', $published)
                ->orderBy('id', 'desc')
                ->with('photo')
                ->take(3)
                ->get();
        
        return response()->json([
            'posts' => $posts
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Get An Individual Post with attachments
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/{id}/{slug}
    | Method:         GET
    | Description:    Gets an individual post with all its attachments
    | Parameters:
    |   $id   -> ID of the post we are retrieving
    */
    public function show($id)
    {
        // dd($id);
        $published = 'published';
        $post = Post::where('id', '=', $id)
                    ->where('status', '=', $published)
                    ->with('category')
                    ->with('photo')
                    ->with('tags')
                    ->with('comments')
                    ->first();

        $related= Post::where('category_id', '=', $post->category->id)
                    ->where('status', '=', $published)
                    ->with('photo')
                    ->with('category')
                    ->where('id', '!=', $post->id)
                    ->take(3)
                    ->orderBy('id', 'desc')
                    ->get();

        return response()->json(
            [
                'post' => $post,
                'related' => $related
            ]
        );
    }

    /*
    |-------------------------------------------------------------------------------
    | Get An Individual Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/{id}/post
    | Method:         GET
    | Description:    Gets an individual post
    | Parameters:
    |   $id   -> ID of the post we are retrieving
    */
    public function edit($id)
    {
        $post = Post::where('id', '=', $id)
                ->with('photo')
                ->with('category')
                ->with('tags')
                ->first();
        // dd($post);
        
        return response()->json([
            'post' => $post
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Adds a New Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts
    | Method:         POST
    | Description:    Adds a new post to the application
    */
    public function store(NewPostRequest $request)
    {
        // dd($request->all());
        if( Auth::user()->can('create', [ Post::class ] ) ){

            $post = new Post();

            $post->category_id = $request->input('category_id');
            $post->title = $request->input('title');
            $post->slug = $post->title;
            $post->content = clean($request->input('content'));

            $post->save();

            $tagID = $request->input('tag_id');
            $s =  array_map('intval', explode(',', $tagID));
            // $z= collect(explode(',', $tagID))->map(function($item) { return intval($item); });
            // dd([$s, $z]);

            $post->tags()->sync($s, false);

            if($request->hasFile('featured')) {
                $featured = $request->file('featured');
                
                $destinationPath = public_path('uploads');
                $filename = time() . '.' . $featured->getClientOriginalName();
                $featured->move($destinationPath, $filename);
        
                $image = new Photo ([
                    'post_id' => $post->id,
                    'image' => '/uploads/' .$filename,
                ]);

                $image->save();
            }

            return response()->json([
                'post' => $post,
                'status' => 'New Post Published.'
            ]);
        }else{
            return response()->json('Unauthorized', 403);
        }
        
    }

    /*
    |-------------------------------------------------------------------------------
    | Update An Individual Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/{id}
    | Method:         PUT
    | Description:    Update an individual post
    | Parameters:
    |   $id   -> ID of the post we are retrieving
    */
    public function update(Request $request, $id )
    {
        // dd($request->all());
        /*
        Grab the post to be edited.
        */
        $post = Post::where('id', '=', $id)->first();

        /*
        Confirms user can edit the post through the Posts Policy
        */
        if( Auth::user()->can('update', $post ) ){
            $post->category_id = $request->input('category_id');
            $post->title = $request->input('title');
            $post->slug = $post->title;
            $post->content = clean($request->input('content'));
    
            $post->save();

            $tagID = $request->input('tag_id');
            $s =  array_map('intval', explode(',', $tagID));
            // $z= collect(explode(',', $tagID))->map(function($item) { return intval($item); });
            // dd([$s, $z]);
            $post->tags()->sync($s, true);

            if($request->hasFile('featured')) {
                $featured = $request->file('featured');
                $destinationPath = public_path('uploads');
                $filename = time() . '.' . $featured->getClientOriginalName();
                $featured->move($destinationPath, $filename);

                $oldPhoto = $post->photo;
                $oldFileName = $oldPhoto->image;
                // dd($oldFileName);
        
                $image = new Photo ([
                    'post_id' => $post->id,
                    'image' => '/uploads/' .$filename,
                ]);
        
                
                $image->save();
                $oldPhoto->delete();
                unlink(public_path('/uploads/' .$filename ));
            }
    
            return response()->json([
                'status' => 'Post updated.'
            ]);
        }else{
            return response()->json('Unauthorized', 403);
        }
    }

    /*
    |-------------------------------------------------------------------------------
    | Publish A Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/{id}/publish
    | Method:         POST
    | Description:    Publish a post
    */
    public function publish($id)
    {
        $publish = 'published';
        $post = Post::where('id', '=', $id)->first();
        if( Auth::user()->can('update', $post ) ){
            $post->status = $publish;
            $post->save();

            return response()->json([
                'status' => 'Post has been published!'
            ]);
        }else{
            return response()->json('Unauthorized', 403);
        }
    }

    /*
    |-------------------------------------------------------------------------------
    | Delete A Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/{id}
    | Method:         DELETE
    | Description:    Delete a post
    | Parameters:
    |   $id   -> ID of the post we are retrieving
    */
    public function destroy( $id )
    {
        /*
        Grabs the Post to be deleted
        */
        $post = Post::where('id', '=', $id)->first();

        /*
        Checks if the user can delete the post through
        our PostPolicy.
        */
        
        if( Auth::user()->can('delete', $post ) ){
            $post->delete();

            $post->tags()->detach();

            return response()->json([
                'status' => 'Post deleted.'
            ]);
        }else{
            return response()->json('Unauthorized', 403);
        }
    }

    /*
    |-------------------------------------------------------------------------------
    | Adds an image 
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/image
    | Method:         POST
    | Description:    Adds a new image from text editor
    */
    public function ckEditorUpload(Request $request)
    {

        if($request->hasFile('file')) {
            $image = $request->file('file'); 
            $destinationPath = public_path('uploads');
            $filename = time() . '.' . $image->getClientOriginalName();
            $image->move($destinationPath, $filename);
    
            $image = new ckImage ([
                'file' => '/uploads/' .$filename,
            ]);
    
            $image->save();

            return response()->json([
                'image' => $image,
                'status' => 'New Image.'
            ]);
        }else{
            return response()->json('Unauthorized', 403);
        }
    }

    public function destroyCKImage($id) 
    {
        $image = ckImage::find($id);

        unlink(public_path('/uploads/' .$image->file ));
        $image->delete();

        return response()->json([
            'status' => 'Image deleted!'
        ]);
    }
}
