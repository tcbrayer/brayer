<?php
$servername = "localhost";
$username = "id22345744_passameurh"; // substitua pelo seu usuário do MySQL
$password = "B12ay312!"; // substitua pela sua senha do MySQL
$dbname = "id22345744_rh";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
