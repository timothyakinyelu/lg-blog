<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script> window.Laravel = { csrfToken: 'csrf_token() ' } </script>

    <title>{{ config('app.name', 'Larissa Gideon') }}</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Livvic|Montserrat|Philosopher&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.6.95/css/materialdesignicons.min.css" rel="stylesheet" type="text/css">
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <!-- Scripts -->
    {{-- <script src="{{ asset('js/index.js') }}"></script> --}}
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://kit.fontawesome.com/b9f2c73019.js"></script>
</body>
</html>
