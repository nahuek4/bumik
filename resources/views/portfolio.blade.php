<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Estudio Bumik | Estudio de diseño y desarrollo web</title>
</head>
<body>
    

    @viteReactRefresh
    @vite('resources/js/App.jsx')
    <div id="app"></div>

</body>
</html>