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




$sql = "TRUNCATE TABLE ideaboxes";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();
?>
