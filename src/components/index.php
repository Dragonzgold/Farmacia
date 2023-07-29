<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba de base de datos</title>
</head>

<body>

    <form action="../PHP/empleado.php" method="post">
        <label for="">Usuario</label>
        <input type="text" name="usuario" id="usuario">

        <label for="">Contraseña</label>
        <input type="text" name="pass" id="pass">

        <button type="submit">Enviar</button>
    </form>

    <button onclick="location.href='creacionCuenta.php'">Crear una cuenta</button>
</body>

</html>