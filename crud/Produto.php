<?php

class Produto
{
    private $pdo;
    private $id_produto;
    private $id_categoria;
    private $nome;
    private $descr_produto;
    private $valor;
    private $quantidade;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }
    public function getPdo()
    {
        return $this->pdo;
    }
    public function getId_produto()
    {
        return $this->id_produto;
    }

    public function getId_categoria()
    {
        return $this->id_categoria;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function getDescr_produto()
    {
        return $this->descr_produto;
    }

    public function getValor()
    {
        return $this->valor;
    }

    public function getQuantidade()
    {
        return $this->quantidade;
    }
    public function setPdo($pdo): void
    {
        $this->pdo = $pdo;
    }
    public function setId_produto($id_produto): void
    {
        $this->id_produto = $id_produto;
    }

    public function setId_categoria($id_categoria): void
    {
        $this->id_categoria = $id_categoria;
    }

    public function setNome($nome): void
    {
        $this->nome = $nome;
    }

    public function setDescr_produto($descr_produto): void
    {
        $this->descr_produto = $descr_produto;
    }

    public function setValor($valor): void
    {
        $this->valor = $valor;
    }

    public function setQuantidade($quantidade): void
    {
        $this->quantidade = $quantidade;
    }

    public function getAll()
    {
        $query = $this->pdo->query("SELECT p.id_produto, c.nome_categoria, p.nome, p.descr_produto, p.valor, p.quantidade 
                                    FROM produtos p 
                                    JOIN categorias c ON p.id_categoria = c.id_categoria");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id_produto)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM produtos WHERE id_produto = ?");
        $stmt->execute([$id_produto]);
        $produto = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($produto) {
            $this->setId_produto($produto['id_produto']);
            $this->setId_categoria($produto['id_categoria']);
            $this->setNome($produto['nome']); // Adicionando o nome
            $this->setDescr_produto($produto['descr_produto']);
            $this->setValor($produto['valor']);
            $this->setQuantidade($produto['quantidade']); // Adicionando quantidade
        }

        return $produto;
    }




    // Alterar o método para adicionar ou editar produto com as novas colunas
    public function save()
    {
        if ($this->getId_produto()) {
            $stmt = $this->pdo->prepare("UPDATE produtos SET id_categoria = ?, nome = ?, descr_produto = ?, valor = ?, quantidade = ? WHERE id_produto = ?");
            return $stmt->execute([$this->getId_categoria(), $this->getNome(), $this->getDescr_produto(), $this->getValor(), $this->getQuantidade(), $this->getId_produto()]);
        } else {
            $stmt = $this->pdo->prepare("INSERT INTO produtos (id_categoria, nome, descr_produto, valor, quantidade) VALUES (?, ?, ?, ?, ?)");
            return $stmt->execute([$this->getId_categoria(), $this->getNome(), $this->getDescr_produto(), $this->getValor(), $this->getQuantidade()]);
        }
    }

    public function delete()
    {
        $stmt = $this->pdo->prepare("DELETE FROM produtos WHERE id_produto = ?");
        return $stmt->execute([$this->getId_produto()]);
    }
}
