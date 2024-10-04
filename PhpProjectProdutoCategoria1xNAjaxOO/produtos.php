<?php
include 'config.php';
include 'Produto.php';
$produto = new Produto($pdo);
$produtos = $produto->getAll();
echo json_encode($produtos);
?>
