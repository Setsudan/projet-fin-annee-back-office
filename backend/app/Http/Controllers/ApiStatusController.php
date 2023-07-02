<?php

namespace App\Http\Controllers;

class ApiStatusController extends Controller
{
    public function show()
    {
        return response()->json([
            'data' => [
                'framework' => 'Laravel',
                'version' => app()->version(),
                'services' => [
                    'database' => app()->make('db')->connection()->getPdo()->getAttribute(\PDO::ATTR_CONNECTION_STATUS) === 'Connection OK; waiting to send.'
                        ? 'OK'
                        : 'ERROR',
                ],
            ],
        ]);
    }
}
