# 📚 API de Livraria

Bem-vindo à API de Livraria!  
Esta aplicação foi desenvolvida com **Node.js**, **Express** e **MongoDB** para gerenciar livros e autores.  
Ela permite **cadastrar**, **editar**, **listar**, **buscar** e **remover** livros e autores — tudo via requisições REST.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (Mongoose)
- Nodemon (desenvolvimento)
- Postman (testes)

---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

git clone https://github.com/saffonso/api-livraria
cd api-livraria

### 2. Instale as dependências

npm install

### 3. Configure a conexão com o MongoDB

Crie um arquivo `.env` e adicione:

DB_CONNECTION_STRING=sua_string_do_mongodb

### 4. Rode o servidor

npm run dev

O servidor iniciará em `http://localhost:3000`.

---

## 🧪 Testando a API com Postman

Você pode usar o Postman para testar todas as rotas:

---

### 📚 Endpoints de Livros

| Método | Rota                            | Descrição                        |
|--------|----------------------------------|----------------------------------|
| GET    | `/livros`                        | Lista todos os livros            |
| GET    | `/livros/:id`                    | Busca um livro por ID            |
| GET    | `/livros/busca?editora=XYZ`      | Busca livros por editora         |
| POST   | `/livros`                        | Cadastra um novo livro           |
| PUT    | `/livros/:id`                    | Atualiza um livro existente      |
| DELETE | `/livros/:id`                    | Remove um livro por ID           |

#### 📥 Exemplo de JSON para POST `/livros`

{
  "titulo": "Dom Casmurro",
  "editora": "Companhia das Letras",
  "paginas": 256,
  "preco": 39.90,
  "autor": {
    "nome": "Machado de Assis",
    "nacionalidade": "Brasileiro"
  }
}

---

### 👨‍🏫 Endpoints de Autores

| Método | Rota               | Descrição                   |
|--------|---------------------|-----------------------------|
| GET    | `/autores`          | Lista todos os autores      |
| GET    | `/autores/:id`      | Busca um autor por ID       |
| POST   | `/autores`          | Cadastra um novo autor      |
| PUT    | `/autores/:id`      | Atualiza um autor           |
| DELETE | `/autores/:id`      | Remove um autor por ID      |

#### 📥 Exemplo de JSON para POST `/autores`

{
  "nome": "Clarice Lispector",
  "nacionalidade": "Brasileira"
}

---

## 📌 Observações

- Todos os dados são salvos no MongoDB.
- O campo `autor` do livro pode ser embutido ou referenciado conforme a estrutura.
- Recomendado utilizar o Postman ou Insomnia para testar.

---

## 💡 Sugestões

- Crie primeiro um autor e depois faça referencia do id dele no JSON quando for cadastrar um livro.

---

## 🧑‍💻 Autor

Desenvolvido por Santiago Affonso (https://github.com/saffonso)  
