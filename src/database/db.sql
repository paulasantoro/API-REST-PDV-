CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    senha VARCHAR(255)
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255)
);

INSERT INTO categorias (descricao) VALUES
('Informática'),
('Celulares'),
('Beleza e Perfumaria'),
('Mercado'),
('Livros e Papelaria'),
('Brinquedos'),
('Moda'),
('Bebê'),
('Games');

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    cpf TEXT NOT NULL UNIQUE,
    cep TEXT,
    rua TEXT,
    numero TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    valor INTEGER NOT NULL,
    categoria_id integer,
    produto_imagem VARCHAR (255),
    FOREIGN KEY (categoria_id) REFERENCES categorias (id)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES clientes(id),
    observacao TEXT,
    valor_total INTEGER
);

CREATE TABLE pedido_produtos(
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    produto_id INTEGER REFERENCES produtos(id),
    quantidade_produto INTEGER,
    valor_produto INTEGER
);


