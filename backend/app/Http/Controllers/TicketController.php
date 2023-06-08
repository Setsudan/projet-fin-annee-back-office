<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();

        return TicketResource::collection($tickets);
    }

    public function store(StoreTicketRequest $request): TicketResource
    {
        $validated = $request->validated();

        $ticket = new Ticket();

        $ticket->fill($validated['data']['attributes']);

        $ticket->save();

        return new TicketResource($ticket);
    }

    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);
    }

    public function update(UpdateTicketRequest $request, Ticket $ticket)
    {
        $validated = $request->validated();

        $ticket = new Ticket();

        $ticket->fill($validated['data']['attributes']);

        $ticket->save();

        return new TicketResource($ticket);
    }

    public function destroy(Ticket $ticket)
    {
        $ticket->delete();

        return response()->noContent();
    }
}
