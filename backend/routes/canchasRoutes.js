const express = require('express')
const canchaController = require('../controllers/canchaController')
const api = express.Router()

api.post('/cancha/crear', canchaController.createCancha)
api.get('/canchas', canchaController.getCanchas)
api.get('/canchas/:id_category',canchaController.getCanchasByCategoria)

module.exports=api