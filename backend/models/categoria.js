const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categoriaSchema = new Schema({
    name:{
        type: String,
        enum: ["padel","futbol", "tenis"]
    },
    descripcion:{
        type:String,
        require:true,
        minLenght:1,
        maxLenght:250
    }
})

module.exports = mongoose.model('categoria', categoriaSchema) 