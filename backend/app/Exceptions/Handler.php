<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Session\TokenMismatchException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $e)
    {
        if ($e instanceof QueryException) {
            return response()->json([
                'errors' => [
                    'status' => 500,
                    'title' => Response::$statusTexts[500],
                    'message' => $e->getMessage(),
                ],
            ], 500);
        }

        if ($e instanceof AuthenticationException) {
            return response()->json([
                'errors' => [
                    'status' => 401,
                    'title' => Response::$statusTexts[401],
                    'message' => $e->getMessage(),
                ],
            ], 401);
        }

        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                'errors' => [
                    'status' => 404,
                    'title' => Response::$statusTexts[404],
                    'message' => $e->getMessage(),
                ],
            ], 404);
        }

        if ($e instanceof TokenMismatchException) {
            return response()->json([
                'errors' => [
                    'status' => 419,
                    'title' => $e->getMessage(),
                    'message' => 'The token has expired or is invalid. Please log in again.',
                ],
            ], 419);
        }

        $statusCode = $e->getCode() ?: $e->status ?? 500;

        return response()->json([
            'errors' => [
                'status' => $statusCode,
                'title' => Response::$statusTexts[$statusCode] ?? 'Unknown error',
                'message' => $e->getMessage() ?? 'An unhandled exception has occurred.',
                'details' => [
                    'file' => $e->getFile() ?? null,
                    'line' => $e->getLine() ?? null,
                ],
            ],
        ], $statusCode);
    }
}
