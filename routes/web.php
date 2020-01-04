<?php

/*
|-------------------------------------------------------------------------------
| Displays the home page
|-------------------------------------------------------------------------------
| URL:            /
| Controller:     Web\AppController@index
| Method:         GET
| Description:    Displays the homepage with the posts. This kicks off
|                 the single page application.
*/
// Route::get('/', function($request) { echo ('hi'); });
Route::get('/{vue?}', 'Web\AppController@index')->where('vue', '[\/\w\.-]*')->name('app');
