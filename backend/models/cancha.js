const mongoose = require('mongoose')
const Schema = mongoose.Schema

const canchaSchema = new Schema ({
    precio:{
        type:Number,
        required: true
    },
    descripcion:{
        type:String,
        minLenght:1,
        maxLenght:250,
        required:true
    },
    categoria:{
        type:Schema.ObjectId,
        ref:"categoria"
    }
})
module.exports = mongoose.model('cancha',canchaSchema)