import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js" 
class LivroController {
    
    static async getAllLivros(req,res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);      
        } catch(erro){
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
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = {...novoLivro, autor:{...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(200).json({message: "criado com sucesso", livro: livroCriado});
        }catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
    }

    static async updateLivro(req,res) {
        try{
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({message: "livro atualizado"});      
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };

    static async deleteLivroByID(req,res) {
        try{
            const id = req.params.id;
            const livroEcontrado = await livro.findByIdAndDelete(id);
            res.status(200).json({message: "livro excluido com sucesso"},livroEcontrado);      
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };

    static async searchLivroByEditora(req,res) {
        const editora = req.query.editora;
        try{
            const livrosEncontrados = await livro.find({editora: editora});
            res.status(200).json(livrosEncontrados);      
        } catch(erro){
            res.status(500).json({message: `${erro.message}`});
        }
        
    };


}

export default LivroController;