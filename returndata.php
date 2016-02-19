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

$userid = $_GET['postuserid'];

$sql = "SELECT id, title, description, color, userid FROM ideaboxes WHERE userid ='me' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $arr = (object) array('id' => $row["id"], 'title' => $row["title"], 'description' => $row["description"], 'userid' => $row["userid"], 'color' => $row["color"] );
        $newarr[] = $arr;

    }
         echo json_encode($newarr);

} else {
    echo "0 results";
}

$conn->close();
?>
