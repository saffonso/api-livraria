import express from "express";

const app = express();
app.use(express.json()); //middleware

const livros = [
    {
        "id":1,
        "nome":"O senhor dos aneis"
    },
    {
        "id":2,
        "nome":"A meta"
    }

]

function buscarLivro(id){
    return livros.findIndex(livro => {
        return Number(id) === livro.id;
    })
}


app.get("/", (req,res) =>{
    res.status(200).send("Curso de Node.js");
})

app.get("/livros",(req,res)=>{
    res.status(200).json(livros);
})

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