<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bumik Mailer</title>
</head>
<body>
    <h1>¡Hola!</h1>
    
    <p>Has recibido un nuevo mensaje de contacto:</p>
    
    <ul>
        <li><strong>Nombre:</strong> {{ $data['nombre'] }}</li>
        <li><strong>Apellido:</strong> {{ $data['apellido'] }}</li>
        <li><strong>Email:</strong> {{ $data['email'] }}</li>
        <li><strong>Teléfono:</strong> {{ $data['telefono'] ?? 'No proporcionado' }}</li>
        <li><strong>Mensaje:</strong> {{ $data['mensaje'] }}</li>
    </ul>
    
    <p>Gracias.</p>
</body>
</html>
