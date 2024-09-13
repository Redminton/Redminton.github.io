<?php
// Configurações do banco de dados
$host = 'localhost';
$db = 'test';
$user = 'root';
$pass = '';

header('Content-Type: application/xml');

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $descr_produto = $_POST['descr_produto'];
    $valor = $_POST['valor'];

    $stmt = $pdo->prepare("INSERT INTO produtos (descr_produto, valor) VALUES (:descr_produto, :valor)");
    $stmt->bindParam(':descr_produto', $descr_produto);
    $stmt->bindParam(':valor', $valor);

    if ($stmt->execute()) {
        $responseXml = new SimpleXMLElement('<response/>');
        $responseXml->addChild('success', 'true');
        echo $responseXml->asXML();
    } else {
        $responseXml = new SimpleXMLElement('<response/>');
        $responseXml->addChild('success', 'false');
        echo $responseXml->asXML();
    }
} catch (PDOException $e) {
    $responseXml = new SimpleXMLElement('<response/>');
    $responseXml->addChild('success', 'false');
    $responseXml->addChild('error', $e->getMessage());
    echo $responseXml->asXML();
}
?>
