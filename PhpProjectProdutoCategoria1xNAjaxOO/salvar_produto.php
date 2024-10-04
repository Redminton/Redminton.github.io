<?php
include 'config.php';
include 'Produto.php';
$produto = new Produto($pdo);
$produto->setIdProduto($_POST['id_produto'] ?? null);
$produto->setIdCategoria($_POST['id_categoria']);
$produto->setDescrProduto($_POST['descr_produto']);
$produto->setValor($_POST['valor']);
$produto->save();
?>
