<?php
$servername = "localhost";
$username = "andymcb_ideabox";
$password = "pru7adut";
$dbname = "andymcb_ideabox";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE ideaboxes (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
userid VARCHAR(30) NOT NULL,
title VARCHAR(200) NOT NULL,
description VARCHAR(200) NOT NULL,
color VARCHAR(200) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table ideaboxes created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}


$conn->close();
?>