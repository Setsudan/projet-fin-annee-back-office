<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFileRequest;
use App\Http\Resources\FileResource;
use App\Models\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UploadFileController extends Controller
{
    public function show(File $file)
    {
        if (request()->headers->get('Accept') === 'application/octet-stream') {
            return Storage::download('public/files/'.$file->name, $file->original_name);
        }

        return new FileResource($file);
    }

    public function store(StoreFileRequest $request)
    {
        $request = $request->validated();

        $uploadedFile = $request['file'];

        if ($uploadedFile->getError() >= 1) {
            return response()->json([
                'errors' => [
                    'status' => 422,
                    'title' => 'Unprocessable Entity',
                    'message' => $uploadedFile->getErrorMessage(),
                ],
            ], 422);
        }

        $filename = Str::random(20).'.'.$uploadedFile->getClientOriginalExtension();

        $file = new File();

        DB::transaction(function () use ($file, $uploadedFile, $filename) {
            $file->fill([
                'mime_type' => $uploadedFile->getMimeType(),
                'name' => $filename,
                'original_name' => $uploadedFile->getClientOriginalName(),
                'size' => $uploadedFile->getSize(),
                'type' => $uploadedFile->getClientOriginalExtension(),
            ]);

            $file->save();

            Storage::disk('local')->put(
                'public/files/'.$filename,
                $uploadedFile->get()
            );
        });

        return new FileResource($file);
    }

    public function destroy(File $file)
    {
        Storage::delete('public/files/'.$file->name);

        $file->delete();

        return response()->noContent();
    }
}
