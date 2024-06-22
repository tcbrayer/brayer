<?php
session_start();
include 'db_connect.php';

// Supondo que o usuário já esteja autenticado e o ID do usuário esteja na sessão
$usuario_id = $_SESSION['usuario_id'];

$sql = $conn->prepare("SELECT u.nome, u.sobrenome, c.descricao_experiencia 
                       FROM usuarios u
                       JOIN candidatos c ON u.id = c.usuario_id
                       WHERE u.id = ?");
$sql->bind_param("i", $usuario_id);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $nome = $row['nome'];
    $sobrenome = $row['sobrenome'];
    $descricao = $row['descricao_experiencia'];
} else {
    echo "Nenhuma experiência encontrada.";
    exit;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visualizar Experiência</title>
</head>
<body>
    <h2>Descrição da Experiência</h2>
    <p><strong>Nome:</strong> <?php echo $nome . " " . $sobrenome; ?></p>
    <p><strong>Descrição:</strong> <?php echo $descricao; ?></p>
</body>
</html>
