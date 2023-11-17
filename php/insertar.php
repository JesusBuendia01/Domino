<?php

    $boleta = $_POST['boleta'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $calificacion = $_POST['calificacion'];

    // Importamos la conexión
    include 'conectar.php';

    // Verficamos que no exista la boleta
    $sql = "SELECT * FROM alumnos WHERE boleta = '$boleta'";
    $res = mysqli_query($conexion, $sql);
    if(mysqli_num_rows($res) > 0) {
        $msg = "La boleta ya existe. Wait...";
    } else {
        // Insertamos el registro
        $sql = "INSERT INTO alumnos (boleta, nombre, apellido, calificacion) VALUES ('$boleta', '$nombre', '$apellido', '$calificacion')";
        $res = mysqli_query($conexion, $sql);
        if($res) {
            $msg = "Registro insertado. Wait...";
        } else {
            $msg =  "Error al insertar el registro. Wait...";
        }
    }

    header("refresh:3;url=../../index.html");
    echo $msg;

?>