<?php

namespace App\Http\Controllers;

use App\Models\ProductionItem;
use Illuminate\Http\Request;

class ProductionItemController extends Controller
{
    /**
     * Display a listing of the production items.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $productionItems = ProductionItem::all();
        return response()->json($productionItems);
    }

    /**
     * Store a newly created production item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'description' => 'required|string',
            'type' => 'required|in:piano,guitar,violin,flute,drums,saxophone,clarinet,trumpet,cello,bass,percussion,choir,accordion,harp,trombone,organ,horn,vibraphone,banjo,mandolin,camera,boom microphone,lighting equipment,film slate,clapperboard,dolly,jib crane,green screen',
            'quantity' => 'required|integer',
            'etat' => 'required|string',
        ]);

        $productionItem = ProductionItem::create($data);
        return response()->json($productionItem, 201);
    }

    /**
     * Display the specified production item.
     *
     * @param  \App\ProductionItems  $productionItem
     * @return \Illuminate\Http\Response
     */
    public function show(ProductionItem $productionItem)
    {
        return response()->json($productionItem);
    }

    /**
     * Update the specified production item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductionItems  $productionItem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductionItem $productionItem)
    {
        $data = $request->validate([
            'description' => 'required|string',
            'type' => 'required|in:piano,guitar,violin,flute,drums,saxophone,clarinet,trumpet,cello,bass,percussion,choir,accordion,harp,trombone,organ,horn,vibraphone,banjo,mandolin,camera,boom microphone,lighting equipment,film slate,clapperboard,dolly,jib crane,green screen',
            'quantity' => 'required|integer',
            'etat' => 'required|string',
        ]);

        $productionItem->update($data);
        return response()->json($productionItem);
    }

    /**
     * Remove the specified production item from storage.
     *
     * @param  \App\ProductionItems  $productionItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductionItem $productionItem)
    {
        $productionItem->delete();
        return response()->json(null, 204);
    }
}

