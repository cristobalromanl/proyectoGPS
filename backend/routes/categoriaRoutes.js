const express = require('express')
const categoriaController = require('../controllers/categoriaController')
const api = express.Router();

api.post('/categoria', categoriaController.createCategoria);
api.get('/categorias', categoriaController.getCategoria)

module.exports=api