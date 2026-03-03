<?php
// 1. Connect to database (update credentials if needed)
$servername = "localhost";
$username = "root";
$password = "";
$database = "portfolio_db";

$conn = new mysqli($servername, $username, $password, $database);

// 2. Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 3. Collect data from form
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// 4. Insert data into table (contacts)
$sql = "INSERT INTO contacts (name, email, subject, message)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo "<h2 style='color:green;'>Message Sent Successfully!</h2>";
} else {
    echo "<h2 style='color:red;'>Failed to send message: " . $stmt->error . "</h2>";
}

$stmt->close();
$conn->close();
?>
