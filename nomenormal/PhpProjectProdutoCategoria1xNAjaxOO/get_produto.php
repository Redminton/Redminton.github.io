<?php
include 'config.php';
include 'Produto.php';

$produto = new Produto($pdo);
$id_produto = $_GET['id_produto'];

$dados_produto = $produto->getById($id_produto);

echo json_encode($dados_produto);
?>
