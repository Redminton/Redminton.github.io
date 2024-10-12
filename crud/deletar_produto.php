<?php
include 'config.php';
include 'Produto.php';

$produto = new Produto($pdo);
$produto->setId_produto($_POST['id_produto']);
$produto->delete();
?>
