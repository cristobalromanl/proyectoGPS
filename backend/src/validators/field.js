import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateCreate = [
  body('name', 'El nombre no debe ser vacío')
    .trim()
    .notEmpty(),
  body('description', 'La descripción no debe ser vacía')
    .trim()
    .notEmpty(),
  body('imagePath', 'El path de la imagen no debe ser vacío')
    .optional()
    .trim()
    .notEmpty(),
  body('price', 'El precio debe ser un número mayor o igual a 0')
    .optional()
    .isInt({ min: 0 }),
  body('categoryId', 'El categoryId debe ser un número mayor o igual a 1')
    .isInt({ min: 1 }),
  validationResultHandler
]

export const validateUpdate = [
  body('name', 'El nombre no debe ser vacío')
    .optional()
    .trim()
    .notEmpty(),
  body('description', 'La descripción no debe ser vacía')
    .optional()
    .trim()
    .notEmpty(),
  body('imagePath', 'El path de la imagen no debe ser vacío')
    .optional()
    .trim()
    .notEmpty(),
  body('price', 'El precio debe ser un número mayor o igual a 0')
    .optional()
    .isInt({ min: 0 }),
  body('categoryId', 'El categoryId debe ser un número mayor o igual a 1')
    .optional()
    .isInt({ min: 1 }),
  validationResultHandler
]
