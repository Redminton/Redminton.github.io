<?php
include 'config.php';
include 'Produto.php';
$produto = new Produto($pdo);

$produto->setId_produto($_POST['id_produto'] ?? null);
$produto->setId_categoria($_POST['id_categoria']);
$produto->setNome($_POST['nome']);
$produto->setDescr_produto($_POST['descr_produto']);
$produto->setValor($_POST['valor']);
$produto->setQuantidade($_POST['quantidade']);

$produto->save();
