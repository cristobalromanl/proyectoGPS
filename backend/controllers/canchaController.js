const cancha = require('../models/cancha')
const Cancha = require('../models/cancha')
const categoria = require('../models/categoria')

const createCancha = (req,res) =>{
    const {precio, descripcion, categoria} = req.body
    const newCancha = new Cancha({
        precio,
        descripcion,
        categoria
    })
    newCancha.save((error,cancha)=>{
        if(error){
            return res.status(400).send({message:"no se logró crear la cancha"})
        }
        return res.status(201).send(cancha)
    })
}

const getCanchas = (req,res) => {
    Cancha.find({}).populate('categoria').exec((error,cancha)=>{
        if(error){
            return res.status(401).send({message:"Error al buscar canchas"})
        }
        if(cancha.length===0){
            return res.status(404).send({message:"No se encontraron canchas"})
        }
        return res.status(201).send(
            cancha
        )
        
    })
}

const getCanchasByCategoria = (req,res)=>{
    const {id_category} = req.params
    Cancha.find({categoria:id_category},(error,cancha)=>{
        if(error){
            return res.status(401).send({message:"Error al buscar canchas"})
        }
        if(cancha.length===0){
            return res.status(404).send({message:"No se encontraron canchas"})
        }
        return res.status(201).send(
            cancha
        )
    })
}

module.exports = {
    createCancha,
    getCanchas,
    getCanchasByCategoria
}