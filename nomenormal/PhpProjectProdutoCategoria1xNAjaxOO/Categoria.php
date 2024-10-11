<?php

class Categoria {
    private $pdo;
    private $id_categoria;
    private $nome_categoria;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Getters e Setters
    public function getIdCategoria() {
        return $this->id_categoria;
    }

    public function setId_categoria($id_categoria) {
        $this->id_categoria = $id_categoria;
    }

    public function getNomeCategoria() {
        return $this->nome_categoria;
    }

    public function setNomeCategoria($nome_categoria) {
        $this->nome_categoria = $nome_categoria;
    }

    // Método para obter todas as categorias
    public function getAll() {
        $query = $this->pdo->query("SELECT * FROM categorias");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
