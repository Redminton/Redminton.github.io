CREATE TABLE categorias (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome_categoria VARCHAR(50)
);

CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    id_categoria INT,
    descr_produto VARCHAR(100),
    valor DECIMAL(10,2),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria)
);
