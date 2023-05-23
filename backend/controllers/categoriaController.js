const categoria = require('../models/categoria')
const Categoria = require ('../models/categoria')

const createCategoria = (req,res) =>{
    const{name, descripcion} = req.body
    const newCategoria = new Categoria ({
        name,
        descripcion
    })
    newCategoria.save((error,categoria)=>{
        if(error){
            return res.status(400).send({message:"no se pudo crear la categoria"})
        }
        return res.status(201).send(categoria)
    })
}

const getCategoria = (req,res) =>{
    Categoria.find({},(error,categoria)=>{
        if(error){
            return res.status(400).send({message:"Error al buscar las categorias"})
        }
        if(categoria.length===0){
            return res.status(404).send({message:"No se encontraron categorias"})
        }
        return res.status(201).send(categoria)
    })
}

module.exports = {
    createCategoria,
    getCategoria
}