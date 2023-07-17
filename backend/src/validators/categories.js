import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateCreate = [
  body('name', 'El nombre no debe ser vacío')
    .trim()
    .notEmpty(),
  validationResultHandler
]

export const validateUpdate = [
  body('name', 'El nombre no debe ser vacío')
    .trim()
    .notEmpty(),
  validationResultHandler
]
