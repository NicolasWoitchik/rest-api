<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user','UsersController@index');

Route::namespace('Api')->group(function(){
    Route::get('users/','UsersController@index');
    Route::post('users/','UsersController@store');
    Route::get('users/{user}', 'UsersController@show');
    Route::put('users/{user}', 'UsersController@update');
    Route::delete('users/{user}', 'UsersController@delete');
});