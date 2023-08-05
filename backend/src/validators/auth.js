import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateSignUp = [
  body('email', 'El email tiene el formato incorrecto')
    .trim()
    .isEmail(),
  body('fullName', 'El nombre no debe ser vacío')
    .trim()
    .notEmpty(),
  body('password', 'La contraseña debe tener al menos 6 caracteres')
    .trim()
    .isLength({ min: 6 }),
  body('phone', 'El número de teléfono tiene el formato incorrecto')
    .optional()
    .trim()
    .isMobilePhone('es-CL'),
  validationResultHandler
]

export const validateSignIn = [
  body('email', 'El email tiene el formato incorrecto')
    .trim()
    .isEmail(),
  body('password', 'La contraseña debe tener al menos 6 caracteres')
    .trim()
    .isLength({ min: 6 }),
  validationResultHandler
]
