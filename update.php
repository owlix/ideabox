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
$id=$_POST['postid'];
$color=$_POST['postcolor'];


$sql = "UPDATE ideaboxes SET title='$title', description='$description', color='$color' WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();
?>
