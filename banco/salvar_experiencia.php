<?php
session_start();
include 'db_connect.php';

// Supondo que o usuário já esteja autenticado e o ID do usuário esteja na sessão
$usuario_id = $_SESSION['usuario_id'];
$descricao = $_POST['descricao'];
$curriculo = addslashes(file_get_contents($_FILES['curriculo']['tmp_name']));

$sql = $conn->prepare("INSERT INTO candidatos (usuario_id, descricao_experiencia, curriculo_pdf) VALUES (?, ?, ?)");
$sql->bind_param("iss", $usuario_id, $descricao, $curriculo);

if ($sql->execute() === TRUE) {
    header("Location: ver_experiencia.php");
    exit;
} else {
    echo "Erro: " . $sql->error;
}

$conn->close();
?>

