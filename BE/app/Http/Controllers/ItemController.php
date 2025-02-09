<?php

namespace App\Http\Controllers;

use App\Models\Item;

use Illuminate\Http\Request;

use Validator;

class ItemController extends Controller
{
    public function index() {
        $item = Item::all();

        $data = [

            'status' => 200,
            'item' => $item

        ];

        return response()->json($data,200);
    }

    public function upload(Request $request) {
        $validate = Validator::make($request->all(), [
            'id' => 'required',
            'title' => 'required',
            'url' => 'required',
            'color' => 'required | string' ,
        ]);
    
        if ($validate->fails()) {
            $data = [
                'status' => 422,
                'message' => $validate->messages(),
            ];
            return response()->json($data, 422);
        } else {
            $item = new Item;
            $item->id = $request->id;
            $item->title = $request->title;
            $item->url = $request->url;
            $item->color = $request->color;
            $item->save();
    
            $data = [
                'status' => 200,
                'message' => 'Data uploaded successfully',
            ];
            return response()->json($data, 200);
        }
    }
}
