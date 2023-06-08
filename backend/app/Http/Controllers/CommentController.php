<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::all();

        return CommentResource::collection($comments);
    }

    public function store(StoreCommentRequest $request): CommentResource
    {
        $validated = $request->validated();

        $comment = new Comment();

        $comment->fill($validated['data']['attributes']);

        $comment->save();

        return new CommentResource($comment);
    }

    public function show(Comment $comment)
    {
        return new CommentResource($comment);
    }

    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        $validated = $request->validated();

        $comment->fill($validated['data']['attributes']);

        $comment->save();

        return new CommentResource($comment);
    }

    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response()->noContent();
    }
}
