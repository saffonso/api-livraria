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

## 📁 Estrutura do Projeto

📦 src
 ┣ 📂controller
 ┃ ┣ 📜 autorController.js
 ┃ ┗ 📜 livroController.js
 ┣ 📂models
 ┃ ┣ 📜 Autor.js
 ┃ ┗ 📜 Livro.js
 ┣ 📂routes
 ┃ ┣ 📜 autorRoutes.js
 ┃ ┗ 📜 livroRoutes.js
 ┗ 📜 server.js

---

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo

### 2. Instale as dependências

npm install

### 3. Configure a conexão com o MongoDB

Crie um arquivo `.env` e adicione:

MONGODB_URI=mongodb://localhost:27017/livraria

Ou utilize sua string do MongoDB Atlas, se preferir.

### 4. Rode o servidor

npm run dev

O servidor iniciará em `http://localhost:3000` (ou na porta configurada).

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

## 🧑‍💻 Autor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)  
Entre em contato para dúvidas ou sugestões de melhorias!

---

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.