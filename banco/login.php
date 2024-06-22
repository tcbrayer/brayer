<?php
session_start();
include 'db_connect.php';

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = $conn->prepare("SELECT id, senha FROM usuarios WHERE email = ?");
$sql->bind_param("s", $email);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($senha, $row['senha'])) {
        $_SESSION['usuario_id'] = $row['id'];
        header("Location: experiencia.html");
        exit;
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}

$conn->close();
?>
