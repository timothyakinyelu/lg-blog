<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Category;
use App\Post;

class CategoriesController extends Controller
{
    /*
    |-------------------------------------------------------------------------------
    | Get All Categories
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories
    | Method:         GET
    | Description:    Gets all of the categories in the application
    */
    public function index()
    {
        $categories = Category::withCount('posts')
                        ->orderBy('updated_at', 'desc')
                        ->get();

        return response()->json($categories);
    }

    /*
    |-------------------------------------------------------------------------------
    | Get An Individual Category
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories/{id}
    | Method:         GET
    | Description:    Gets an individual cafe
    | Parameters:
    |   $id   -> ID of the category we are retrieving
    */
    public function show( $id, $slug )
    {
        
        $posts = Post::where('category_id', '=', $id)
                    ->with('category')
                    ->with('photo')
                    ->withCount('comments')
                    ->paginate(5);

        return response()->json([
            'cat_posts' => $posts
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Adds a New Category
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories
    | Method:         POST
    | Description:    Adds a new category to the application
    */
    public function store(Request $request)
    {
        $category = new Category();

        // $category->parent = $request->input('parent');
        $category->name = $request->input('name');
        $category->slug = $category->name;

        $category->save();

        return response()->json([
            'status' => 'New Category Saved.'
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Update A Category
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories/{id}/edit
    | Method:         PUT
    | Description:    Update a category
    | Parameters:
    |   $id   -> ID of the category we are retrieving
    */
    public function update( $id )
    {
        $category = Category::where('id', '=', $id)->first();

        // $category->parent = $request->input('parent');
        $category->name = $request->input('name');
        $category->slug = $category->name;

        $category->save();

        return response()->json([
            'status' => 'Category updated.'
        ]);
    }

    /*
    |-------------------------------------------------------------------------------
    | Delete A Category
    |-------------------------------------------------------------------------------
    | URL:            /api/v1/categories/{id}
    | Method:         DELETE
    | Description:    Delete a category
    | Parameters:
    |   $id   -> ID of the category we are retrieving
    */
    public function destroy( $id )
    {
        $category = Category::find($id);
        $category->delete();

        return response()->json([
            'status' => 'Category has been deleted'
        ]);
    }
}
