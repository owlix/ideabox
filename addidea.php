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

$title=$_POST['posttitle'];
$description=$_POST['postdescription'];
$userid=$_POST['postuserid'];
$color=$_POST['postcolor'];


$sql = "INSERT INTO ideaboxes (title, description, userid, color)
VALUES ('$title', '$description', '$userid', '$color' )";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
