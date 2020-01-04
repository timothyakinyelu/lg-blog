<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function(){
    Route::post('login', 'Api\AuthController@login');
    
    Route::post('register', 'Api\AuthController@register');

    
    /*
    |-------------------------------------------------------------------------------
    | Get All Posts
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/getAllPosts
    | Controller:     Api\PostsController@index
    | Method:         GET
    | Description:    Gets all of the published posts in the application
    */
    Route::get('/posts/published', 'Api\PostsController@index');

    /*
    |-------------------------------------------------------------------------------
    | Get Recent Posts
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/posts/recent
    | Controller:     Api\PostsController@recent
    | Method:         GET
    | Description:    Gets all recent posts in the application
    */
    Route::get('/posts/recent', 'Api\PostsController@recent');

    /*
    |-------------------------------------------------------------------------------
    | Get An Individual Post
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/post/{id}
    | Controller:     Api\PostsController@show
    | Method:         GET
    | Description:    Gets an individual post
    */
    Route::get('/post/{id}/{slug}', 'Api\PostsController@show');

    /*
    |-------------------------------------------------------------------------------
    | Get An Individual Category
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/category/{id}/{slug}
    | Controller:     Api\CategoriesController@show
    | Method:         GET
    | Description:    Gets an individual category
    */
    Route::get('/category/{id}/{slug}', 'Api\CategoriesController@show');

    /*
    |-------------------------------------------------------------------------------
    | Get All Categories
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories
    | Controller:     Api\CategoriesController@index
    | Method:         GET
    | Description:    Gets all of the categories in the application
    */
    Route::get('/categories', 'Api\CategoriesController@index');

    /*
    |-------------------------------------------------------------------------------
    | Get All Comments
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/comments
    | Controller:     Api\CommentsController@index
    | Method:         GET
    | Description:    Gets all of the comments in the post
    */
    Route::get('/comments', 'Api\CommentsController@index');

    /*
    |-------------------------------------------------------------------------------
    | Submit A Comment
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/comments
    | Controller:     Api\CommentsController@store
    | Method:         POST
    | Description:    Submits a comment for a post
    */
    Route::post('/comments', 'Api\CommentsController@store');

    /*
    |-------------------------------------------------------------------------------
    | Delete image
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/images/{id}
    | Controller:     Api\PostsController@destroyCKImage
    | Method:         DELETE
    | Description:    Deletes image from database and storage
    */
    Route::delete('/images/{id}', 'Api\PostsController@destroyCKImage');
    
    Route::group(['middleware' => ['auth:api', 'admin']], function(){
        Route::get('getUser', 'Api\AuthController@getUser');

        /*
        |-------------------------------------------------------------------------------
        | Adds a New image
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/images
        | Controller:     Api\PostsController@ckEditorUpload
        | Method:         POST
        | Description:    Adds a new image to database from text editor
        */
        Route::post('/images', 'Api\PostsController@ckEditorUpload');


        /*
        |-------------------------------------------------------------------------------
        | Get All Posts
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts/drafts
        | Controller:     Api\PostsController@drafts
        | Method:         GET
        | Description:    Gets all of the drafts in the application
        */
        Route::get('/posts/drafts', 'Api\PostsController@drafts');

        /*
        |-------------------------------------------------------------------------------
        | Adds a New Post
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts
        | Controller:     Api\PostsController@store
        | Method:         POST
        | Description:    Adds a new post to the application
        */
        Route::post('/posts', 'Api\PostsController@store');

        /*
        |-------------------------------------------------------------------------------
        | Fetches a post
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts/{id}
        | Controller:     Api\PostsController@edit
        | Method:         GET
        | Description:    Fetches a post to edit or preview
        */
        Route::get('/posts/{id}', 'Api\PostsController@edit');

        /*
        |-------------------------------------------------------------------------------
        | Update An Individual Post
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts/{id}
        | Controller:     API\PostsController@update
        | Method:         PUT
        | Description:    Update an individual post
        */
        Route::put('/posts/{id}', 'Api\PostsController@update');

        /*
        |-------------------------------------------------------------------------------
        | Publish A Individual Post
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts/{id}
        | Controller:     API\PostsController@update
        | Method:         PUT
        | Description:    Publish new post
        */
        Route::put('/posts/{id}/publish', 'Api\PostsController@publish');

        /*
        |-------------------------------------------------------------------------------
        | Delete An Individual Post
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/posts/{id}
        | Controller:     API\PostsController@destroy
        | Method:         DELETE
        | Description:    Delete an individual post
        */
        Route::delete('/posts/{id}', 'Api\PostsController@destroy');

        /*
        |-------------------------------------------------------------------------------
        | Adds a New Category
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/categories
        | Controller:     Api\CategoriesController@store
        | Method:         POST
        | Description:    Adds a new category to the application
        */
        Route::post('/categories', 'Api\CategoriesController@store');

        /*
        |-------------------------------------------------------------------------------
        | Update A Category
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/categories/{id}/edit
        | Controller:     Api\CategoriesController@update
        | Method:         PUT
        | Description:    Update a category
        */
        Route::put('/categories/{id}/edit', 'Api\CategoriesController@update');

        /*
        |-------------------------------------------------------------------------------
        | Delete A Category
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/categories/{id}
        | Controller:     Api\CategoriesController@destroy
        | Method:         DELETE
        | Description:    Delete a category
        */
        Route::delete('/categories/{id}', 'Api\CategoriesController@destroy');

        /*
        |-------------------------------------------------------------------------------
        | Tags
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/tags
        | Controller:     Api\TagsController@index
        | Method:         GET
        | Description:    Gets all tags
        */
        Route::get('/tags', 'Api\TagsController@index');

        /*
        |-------------------------------------------------------------------------------
        | Adds a New Tag
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/tags
        | Controller:     Api\TagsController@store
        | Method:         POST
        | Description:    Adds a new tag to the blog
        */
        Route::post('/tags', 'Api\TagsController@store');

        /*
        |-------------------------------------------------------------------------------
        | Update An Individual Tag
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/tags/{id}/edit
        | Controller:     Api\TagsController@update
        | Method:         PUT
        | Description:    Updates a tag
        */
        Route::put('/tags/{id}/edit', 'Api\TagsController@update');

        /*
        |-------------------------------------------------------------------------------
        | Delete A Tag
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/tags/{id}
        | Controller:     Api\TagsController@destroy
        | Method:         DELETE
        | Description:    Delete a tag
        */
        Route::delete('/tags/{id}', 'Api\TagsController@destroy');

        /*
        |-------------------------------------------------------------------------------
        | Search for a Tag
        |-------------------------------------------------------------------------------
        | URL:            /api/v1/tags/search
        | Controller:     Api\TagsController@tagSearch
        | Method:         GET
        | Description:    Search tag
        */
        Route::get('/tags/search', 'Api\TagsController@tagSearch');
    });
});
