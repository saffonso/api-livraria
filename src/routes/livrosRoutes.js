import express from "express";
import LivroController from "../controller/livroController.js";


const routes = express.Router();

routes.get("/livros",LivroController.getAllLivros);
routes.get("/livros/busca",LivroController.searchLivroByEditora);
routes.get("/livros/:id",LivroController.getLivroByID);
routes.post("/livros",LivroController.saveLivro);
routes.put("/livros/:id",LivroController.updateLivro);
routes.delete("/livros/:id",LivroController.deleteLivroByID);

export default routes;