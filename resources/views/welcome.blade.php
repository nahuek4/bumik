<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Estudio de diseño y desarrollo web. Trabajamos la identidad visual de tu marca, tu presencia en redes sociales y en el diseño y desarrolo web de tu sitio web. ¡Contactanos y cotizá tu proyecto!">
    <link rel="icon" href="assets/img/logos/logowminimo.webp" type="image/x-icon">
    <link rel="apple-touch-icon image_src" href="assets/img/logos/logowminimo.webp" type="image/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Estudio Bumik | Estudio de diseño y desarrollo web</title>
</head>
<body>
    

    @viteReactRefresh
    @vite('resources/js/App.jsx')
    
    <div id="app"></div>

</body>
</html>