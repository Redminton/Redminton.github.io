<?php

class Produto {
    private $pdo;
    private $id_produto;
    private $id_categoria;
    private $descr_produto;
    private $valor;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    
    public function getPdo() {
        return $this->pdo;
    }

    public function getId_produto() {
        return $this->id_produto;
    }

    public function getId_categoria() {
        return $this->id_categoria;
    }

    public function getDescr_produto() {
        return $this->descr_produto;
    }

    public function getValor() {
        return $this->valor;
    }

    public function setPdo($pdo): void {
        $this->pdo = $pdo;
    }

    public function setId_produto($id_produto): void {
        $this->id_produto = $id_produto;
    }

    public function setId_categoria($id_categoria): void {
        $this->id_categoria = $id_categoria;
    }

    public function setDescr_produto($descr_produto): void {
        $this->descr_produto = $descr_produto;
    }

    public function setValor($valor): void {
        $this->valor = $valor;
    }

        
    // Método para obter todos os produtos
    public function getAll() {
            $query = $this->pdo->query("SELECT p.id_produto, c.nome_categoria, p.descr_produto, p.valor 
                                         FROM produtos p 
                                         JOIN categorias c ON p.id_categoria = c.id_categoria");
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para obter um produto por ID
    public function getById($id_produto) {
        $stmt = $this->pdo->prepare("SELECT * FROM produtos WHERE id_produto = ?");
        $stmt->execute([$id_produto]);
        $produto = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($produto) {
            $this->setId_produto($produto['id_produto']);
            $this->setId_categoria($produto['id_categoria']);
            $this->setDescr_produto($produto['descr_produto']);
            $this->setValor($produto['valor']);
        }

        return $produto;
    }

    // Método para adicionar ou editar produto
    public function save() {
        if ($this->getId_produto()) {
            $stmt = $this->pdo->prepare("UPDATE produtos SET id_categoria = ?, descr_produto = ?, valor = ? WHERE id_produto = ?");
            return $stmt->execute([$this->getId_categoria(), $this->getDescr_produto(), $this->getValor(), $this->getId_produto()]);
        } else {
            $stmt = $this->pdo->prepare("INSERT INTO produtos (id_categoria, descr_produto, valor) VALUES (?, ?, ?)");
            return $stmt->execute([$this->getId_categoria(), $this->getDescr_produto(), $this->getValor()]);
        }
    }

    // Método para deletar produto
    public function delete() {
        $stmt = $this->pdo->prepare("DELETE FROM produtos WHERE id_produto = ?");
        return $stmt->execute([$this->getId_produto()]);
    }
}
?>
