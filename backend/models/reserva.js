const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservaSchema = new Schema({
    fecha:{
        type: Date,
        require:true
    },
    hora:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        enum:["disponible", "ocupada"]
    },
    cancha:{
        type:Schema.ObjectId,
        ref:"cancha"
    }
})

module.exports = mongoose.model('reserva',reservaSchema)