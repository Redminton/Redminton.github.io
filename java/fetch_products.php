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

    $stmt = $pdo->query("SELECT * FROM produtos");
    $produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $xml = new SimpleXMLElement('<produtos/>');

    foreach ($produtos as $produto) {
        $prod = $xml->addChild('produto');
        $prod->addChild('id_produto', $produto['id_produto']);
        $prod->addChild('descr_produto', $produto['descr_produto']);
        $prod->addChild('valor', $produto['valor']);
    }

    echo $xml->asXML();
} catch (PDOException $e) {
    $errorXml = new SimpleXMLElement('<error/>');
    $errorXml->addChild('message', $e->getMessage());
    echo $errorXml->asXML();
}
?>
