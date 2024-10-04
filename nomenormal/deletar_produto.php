<?php
include 'config.php';
include 'Produto.php';

$produto = new Produto($pdo);
$produto->setIdProduto($_POST['id_produto']);
$produto->delete();
?>
