<?php

    $boleta = $_POST['boleta'];
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Importamos la conexión
    include 'connection.php';

    // Verficamos que no exista la boleta
    $sql = "SELECT * FROM user WHERE idUser = '$boleta'";
    $res = mysqli_query($db, $sql);
    if(mysqli_num_rows($res) > 0) {
        $msg = "La boleta ya existe. Wait...";
    } else {
        // Insertamos el registro
        $sql = "INSERT INTO user (idUser, userName, passwors, nami, lastName) VALUES ('$boleta', '$username', '$password', '$name', '$lastname')";
        $res = mysqli_query($db, $sql);
        if($res) {
            $msg = "Registro insertado. Wait...";
        } else {
            $msg =  "Error al insertar el registro. Wait...";
        }
    }

    header("refresh:3;url=../index.html");
    echo $msg;

?>
