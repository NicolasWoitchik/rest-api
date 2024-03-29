<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <title>REST Api</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="api-base-url" content="{{ url('api') }}" />
  <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  {{-- <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet"> --}}
</head>
<body>
  <div id="app">
    <app></app>  
  </div>
  <script src="{{ url (mix('/js/app.js')) }}" type="text/javascript"></script>
</body>
</html>
