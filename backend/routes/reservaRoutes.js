const express = require('express')
const reservaController = require('../controllers/reservaController')
const api = express.Router()

api.post('/reserva/crear',reservaController.createReserva)
api.get('/reservas',reservaController.getReservas)

module.exports=api