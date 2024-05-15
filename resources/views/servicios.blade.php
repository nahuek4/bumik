<!DOCTYPE html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-NZXCHH09MC"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NZXCHH09MC');
    </script>
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
