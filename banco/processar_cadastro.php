<?php
include 'db_connect.php';

$tipo_usuario = $_POST['tipo_usuario'];
$email = $_POST['email'];
$senha = password_hash($_POST['senha'], PASSWORD_BCRYPT);

if ($tipo_usuario == 'candidato') {
    $nome = $_POST['nome'];
    $sobrenome = $_POST['sobrenome'];
    $cpf = $_POST['cpf'];

    $sql = $conn->prepare("INSERT INTO usuarios (email, senha, cpf, nome, sobrenome, nivel_acesso) VALUES (?, ?, ?, ?, ?, 'candidato')");
    $sql->bind_param("sssss", $email, $senha, $cpf, $nome, $sobrenome);
} elseif ($tipo_usuario == 'empresa') {
    $nome = $_POST['nome'];
    $cnpj = $_POST['cnpj'];

    $sql = $conn->prepare("INSERT INTO usuarios (email, senha, cpf, nome, sobrenome, nivel_acesso) VALUES (?, ?, ?, ?, '', 'empresa')");
    $sql->bind_param("ssss", $email, $senha, $cnpj, $nome);
}

if ($sql->execute() === TRUE) {
    echo "Cadastro realizado com sucesso.";
} else {
    echo "Erro: " . $sql->error;
}

$conn->close();
?>
