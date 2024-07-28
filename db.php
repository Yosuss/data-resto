<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
echo "Koneksi berhasil";

// Menutup koneksi
$conn->close();
?>