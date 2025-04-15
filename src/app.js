import express from "express";
import conectanaDB from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectanaDB();



conexao.on("error",(erro)=>{
    console.log("erro de conexão", erro);
})


conexao.once("open", () =>{
    console.log("conexão feita com sucesso");
})
 
const app = express();
routes(app);

app.get("/livros/:id",(req,res)=>{
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.put("/livros/:id", (req,res)=>{
    const index = buscarLivro(req.params.id);
    livros[index].nome = req.body.nome;
    res.status(200).send("Nome do livro alterado com sucesso");
})

app.post("/livros",(req,res)=>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
})

app.delete("/livros/:id", (req,res)=>{
    const index = buscarLivro(req.params.id);
    livros.splice(index,1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;