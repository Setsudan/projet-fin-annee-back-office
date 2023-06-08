<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductionItemRequest;
use App\Http\Requests\UpdateProductionItemRequest;
use App\Http\Resources\ProductionItemResource;
use App\Models\ProductionItem;

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

        return ProductionItemResource::collection($productionItems);
    }

    /**
     * Store a newly created production item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductionItemRequest $request)
    {
        $validated = $request->validated();

        $productionItem = new ProductionItem();

        $productionItem->fill($validated['data']['attributes']);

        $productionItem->save();

        return new ProductionItemResource($productionItem);
    }

    /**
     * Display the specified production item.
     *
     * @param  \App\ProductionItems  $productionItem
     * @return \Illuminate\Http\Response
     */
    public function show(ProductionItem $productionItem)
    {
        return new ProductionItemResource($productionItem);
    }

    /**
     * Update the specified production item in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductionItems  $productionItem
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductionItemRequest $request, ProductionItem $productionItem)
    {
        $validated = $request->validated();

        if (isset($validated['data']['attributes'])) {
            $productionItem->fill($validated['data']['attributes']);

            $productionItem->save();
        }

        return new ProductionItemResource($productionItem);
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

        return response()->noContent();
    }
}
