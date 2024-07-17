<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars($_POST['name']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Validar los datos (este es un ejemplo simple, puedes hacer validaciones más avanzadas)
    if (!empty($nombre) && !empty($email) && !empty($mensaje)) {
        // Enviar el correo (esto es un ejemplo, asegúrate de configurar correctamente tu servidor de correo)
        $para = "salascarlos8711@gmail.com"; // Cambia esto por tu dirección de correo
        $asunto = 'Quiero aprender español..!';
        $cuerpo = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";
        $cabeceras = "From: $email";

        if (mail($para, $asunto, $cuerpo, $cabeceras)) {
            echo "Mensaje enviado correctamente.";
        } else {
            echo "Error al enviar el mensaje.";
        }
    } else {
        echo "Todos los campos son obligatorios.";
    }
} else {
    echo "Método no permitido.";
}
header("Location:./index.html");
exit();
?>
