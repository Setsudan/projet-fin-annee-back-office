<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\OrchestreController;
use App\Http\Controllers\ProductionItemController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UploadFileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserRelationshipController;
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

Route::apiResource('/users', UserController::class)
    ->only(['store']);

Route::middleware('auth:sanctum')->group(function () {
    /*
        ROLES
    */
    Route::apiResource('/roles', RoleController::class)
        ->only(['index']);

    /*
        USER
    */
    Route::apiResource('/users', UserController::class)
        ->only(['show', 'index', 'update', 'destroy']);

    Route::apiResource('users.relationships', UserRelationshipController::class)
        ->only(['update']);

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

    Route::apiResource('/professor', ProfessorController::class)
        ->only(['index', 'show']);

    Route::apiResource('/student', StudentController::class)
        ->only(['index', 'show']);

    /**
     * File
     */
    Route::apiResource('/files', UploadFileController::class)
        ->only(['destroy', 'update', 'show', 'store']);

    Route::apiResource('/orchestres', OrchestreController::class)
        ->only(['store']);

    /**
     * Tickets
     **/
    Route::ApiResource('/tickets', TicketController::class)
        ->only(['index', 'store', 'show', 'update', 'destroy']);

    /**
     * Comments
     **/
    Route::ApiResource('/comments', CommentController::class)
        ->only(['index', 'store', 'show', 'update', 'destroy']);

    //Route::post('/orchestres/{orchestre}/invite', [OrchestreController::class, 'inviteByEmail']);

    /*
        PRODUCTION ITEMS
    */
    Route::apiResource('/production-items', ProductionItemController::class)
        ->only(['index', 'show', 'store', 'update', 'destroy']);
});
