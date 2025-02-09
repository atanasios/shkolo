<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Middleware\CorsMiddleware;

Route::get('/', function () {
    return view('welcome');
});

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/api/item', [ItemController::class, 'index']);
    Route::post('/api/item', [ItemController::class, 'upload']);
});