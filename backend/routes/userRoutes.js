const express = require('express')
const userController = require('../controllers/userController')
const api = express.Router()

api.post('/usuario',userController.createUser);
api.get('/usuarios', userController.getUser);
api.route('/usuario/:id').
    delete(userController.deleteUsuarioById).
    get(userController.getUsuarioById).
    put(userController.updateUsuarioById);
module.exports=api