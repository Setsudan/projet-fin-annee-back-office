<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrchestreRequest;
use App\Http\Resources\OrchestreResource;
use App\Mail\OrchestraInvitation;
use App\Models\Orchestre;
use Illuminate\Support\Facades\Mail;

class OrchestreController extends Controller
{
    public function store(StoreOrchestreRequest $request)
    {
        $validated = $request->validated();
        //dd($validated['data']['attributes']);
        $orchestre = Orchestre::create([
            'email' => $validated['data']['attributes']['email'],
            'name' => $validated['data']['attributes']['name'],
            'nombreDeMembre' => $validated['data']['attributes']['nombreDeMembre'],
            'hasBeenInvited' => $validated['data']['attributes']['hasBeenInvited'],
        ]);

        return new OrchestreResource($orchestre);
    }

    public function index()
    {
        $orchestres = Orchestre::all();

        return OrchestreResource::collection($orchestres);
    }

    public function show(Orchestre $orchestre)
    {
        return new OrchestreResource($orchestre);
    }

    public function update(StoreOrchestreRequest $request, Orchestre $orchestre)
    {
        $validated = $request->validated();

        $orchestre->update([
            'email' => $validated['data']['attributes']['email'],
            'name' => $validated['data']['attributes']['name'],
            'nombreDeMembre' => $validated['data']['attributes']['nombreDeMembre'],
            'hasBeenInvited' => $validated['data']['attributes']['hasBeenInvited'],
        ]);

        return new OrchestreResource($orchestre);
    }

    public function destroy(Orchestre $orchestre)
    {
        $orchestre->delete();

        return response()->noContent();
    }

    public function sendInvitation()
    {
        $space = 'Concert Hall';
        $instruments = 'Violin, Cello, Flute';
        $equipment = 'Amplifiers, Microphones';
        $attendees = 100;
        $concertHours = '7:00 PM - 10:00 PM';

        $email = 'example@example.com'; // Replace with the recipient's email address

        Mail::to($email)->send(new OrchestraInvitation($space, $instruments, $equipment, $attendees, $concertHours));

        return 'Invitation email sent successfully';
    }
}
