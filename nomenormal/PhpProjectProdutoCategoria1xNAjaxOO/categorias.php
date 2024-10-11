<?php
include 'config.php';
include 'Categoria.php';
$categoria = new Categoria($pdo);
$categorias = $categoria->getAll();
echo json_encode($categorias);
?>
