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


export default app;