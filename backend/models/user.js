const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    rol:{
        type:String,
        enum:["user","admin"]
    }
})
module.exports = mongoose.model('user',usuarioSchema)