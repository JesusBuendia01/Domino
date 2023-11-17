<?php

    // Import the connection.php file
    $db = require_once("connection.php");

    // Get the user's login and password
    $login = $_POST['username'];
    $password = $_POST['password'];

    // Check if the user is in the database
    $query = "SELECT * FROM user WHERE username = '$login' AND passwors = '$password'";
    $result = $db -> query( $query );

    // If the user is in the database, redirect to the main page
    if( $result -> num_rows > 0 ) {
        header("Location: ../domii.html");
    } else {
        // If the user is not in the database, redirect to the login page
        header("Location: ../index.html");
    }

?>