const Reserva = require('../models/reserva')

const createReserva = (req,res)=>{
    const {fecha,hora,cancha}= req.body
    let estado = "ocupada"
    const newReserva = new Reserva({
        fecha,
        hora,
        estado:estado,
        cancha
    })
    newReserva.save((error,reserva)=>{
        if(error){
            return res.status(401).send(error)
        }
        return res.status(201).send(reserva)
    }) 
}
const getReservas= (req,res)=>{
    Reserva.find({}).populate('cancha').exec((error,reservas)=>{
        if(error){
            return res.status(401).send({message:"Error al buscar las reservas"})
        }
        if(reservas.length===0){
            return res.status(404).send({message:"No se encontraron reservas"})
        }
        return res.status(201).send(reservas)
    })
} 
module.exports = {createReserva,getReservas}