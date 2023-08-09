import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateUpdate = [
  body('email', 'El email tiene el formato incorrecto')
    .optional()
    .trim()
    .isEmail(),
  body('fullName', 'El nombre no debe ser vacío')
    .optional()
    .trim()
    .notEmpty(),
  body('region', 'La región no debe ser vacía')
    .optional()
    .trim()
    .notEmpty(),
  body('city', 'La ciudad no debe ser vacía')
    .optional()
    .trim()
    .notEmpty(),
  body('phone', 'El número de teléfono tiene el formato incorrecto')
    .optional()
    .trim()
    .isMobilePhone('es-CL'),
  body('clubId', 'El clubId debe ser un número mayor o igual a 1')
    .optional()
    .isInt({ min: 1 }),
  validationResultHandler
]
