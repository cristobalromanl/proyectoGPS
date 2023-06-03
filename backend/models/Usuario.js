const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    },
    email:{
        type:String,
        require:true,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    },
    telefono:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type:String,
        require:true
    },
    rol:{
        type:String,
        enum:["user","admin","superadmin"]
    }
})
module.exports = mongoose.model('user',usuarioSchema)