import livro from "../models/Livro.js";

class LivroController {
    
    static async getAllLivros(req,res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);      
        } catch(err0){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };
    static async getLivroByID(req,res) {
        try{
            const id = req.params.id;
            const livroEcontrado = await livro.findById(id);
            res.status(200).json(livroEcontrado);      
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };

    
    static async saveLivro(req,res) {
        try{
            const novoLivro = await livro.create(req.body);
            res.status(200).json({message: "criado com sucesso", livro: novoLivro});
        }catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async updateLivro(req,res) {
        try{
            const id = req.params.id;
            const listaLivros = await livro.findById(id);
            res.status(200).json(listaLivros);      
        } catch(err0){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };


}

export default LivroController;