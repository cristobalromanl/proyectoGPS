const express = require('express')
const userController = require('../controllers/userController')
const api = express.Router()

api.post('/user/crear',userController.createUser);

module.exports=api