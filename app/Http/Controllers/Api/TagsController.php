<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;

class TagsController extends Controller
{
    public function index()
    {
        $tags = Tag::withCount('posts')
                ->orderBy('updated_at', 'desc')
                ->get();

        return response()->json($tags);
    }

    public function store(Request $request)
    {
        $this->validate($request, array('name' => 'required|max:255'));

        $tag = new Tag;

        $tag->name = $request->name;
        $tag->save();

        return response()->json([
            'status' => 'Tag was successfully created!'
        ]);
    }

    public function edit($id)
    {
        $tag = Tag::where('id', '=', $id)->first();

        return response()->json($tag);
    }

    public function update(Request $request, $id)
    {
        $tag = Tag::where('id', '=', $id)->first();

        $tag->name = $equest->name;
        $tag->save();

        return response()->json([
            'status' => 'Tag was successfully updated!'
        ]);
    }

    public function destroy($id) 
    {
        $tag = Tag::find($id);
        $tag->delete();

        return response()->json([
            'status' => 'Tag has been deleted'
        ]);
    }

    public function tagSearch(Request $request) 
    {
        $query = $request->search;
        /*
        If the query is not set or is empty, load all the tags.
        Otherwise load the tags that match the query
        */
        if( $query == null || $query == '' ){
        $tags = Tag::all();
        }else{
        $tags = Tag::where('name', 'LIKE', '%'.$query.'%')->get();
        }
        /*
        Return all of the tags as JSON
        */
        return response()->json(['tags' => $tags] );
    }
}
