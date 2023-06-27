<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserController;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('/users', UserController::class)->only(['store']);

Route::middleware('auth:sanctum')->group(function () {
    /*
        AUTHENTIFICATION
    */
    Route::post('/logout', [AuthenticationController::class, 'logout'])->name('authentication.logout');

    Route::get('/user', function (Request $request) {
        $user = User::find($request->user()->id);

        return response()->json([
            'data' => new UserResource($user),
        ]);
    })->name('authentication.user');

    /*
        API RESOURCE
    */
    Route::get('/', function () {
        return response()->json([
            'data' => [
                'id' => 1,
                'type' => 'Api Resource',
                'attributes' => [
                    'name' => 'Laravel',
                    'version' => '10.0',
                    'message' => 'Hello from Laravel API',
                ],
            ],
        ], 200);
    });
});

Route::post('/orchestres/{orchestre}/invite', [OrchestreController::class, 'inviteByEmail']);
