<?php
// Configurações do banco de dados
$host = 'localhost'; // Endereço do servidor MySQL
$db = 'test';    // Nome do banco de dados
$user = 'root';      // Nome de usuário do MySQL
$pass = '';          // Senha do MySQL

try {
    // Conecta ao banco de dados usando PDO
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verifica se o parâmetro 'nome' foi enviado via POST
    if (isset($_POST['nome'])) {
        $nome = htmlspecialchars($_POST['nome']); // Sanitiza a entrada

        // Prepara a instrução SQL para inserção
        $stmt = $pdo->prepare("INSERT INTO usuarios (nome) VALUES (:nome)");
        $stmt->bindParam(':nome', $nome);

        // Executa a instrução e verifica se a inserção foi bem-sucedida
        if ($stmt->execute()) {
            echo "Usuário '$nome' inserido com sucesso!";
        }
        else {
            echo "Falha ao inserir o usuário.";
        }
    }
    else {
        echo "Nenhum dado recebido.";
    }
} catch (PDOException $e) {
    // Exibe a mensagem de erro se a conexão falhar
    echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
}
?>