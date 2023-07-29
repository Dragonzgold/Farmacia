<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir solicitudes con los siguientes métodos (GET, POST, etc.)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir que se incluyan encabezados en la solicitud
header("Access-Control-Allow-Headers: Content-Type");

// Verificar si la solicitud es por el método POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Consulta SQL para eliminar el producto con el id proporcionado
    $sql = "DELETE FROM articulos WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        // Agregar mensaje de depuración para verificar la eliminación
        echo "Producto eliminado correctamente";
        // Si la eliminación fue exitosa, enviamos una respuesta al frontend
        echo json_encode(["message" => "El producto ha sido eliminado correctamente"]);
    } else {
        // Si hubo un error en la eliminación, enviamos una respuesta con el error
        echo json_encode(["error" => "Error al eliminar el producto"]);
    }

    // Cerramos la conexión a la base de datos
    $conn->close();
}
