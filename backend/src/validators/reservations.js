import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateCreate = [
  body('startDate', 'La fecha de inicio tiene el formato incorrecto')
    .isISO8601()
    .toDate(),
  body('endDate', 'La fecha de término tiene el formato incorrecto')
    .optional()
    .isISO8601()
    .toDate(),
  body('isConfirmed', 'El estado de confirmación debe ser \'true\' o \'false\'')
    .optional()
    .isBoolean(),
  body('userId', 'El userId debe ser un número mayor o igual a 1')
    .isInt({ min: 1 }),
  body('fieldId', 'El fieldId debe ser un número mayor o igual a 1')
    .isInt({ min: 1 }),
  body('equipments', 'Los equipamientos tienen el formato incorrecto')
    .optional()
    .isArray(),
  body('equipments.*.equipmentId', 'Los equipmentId deben ser un número mayor o igual a 1')
    .isInt({ min: 1 }),
  validationResultHandler
]

export const validateUpdate = [
  body('startDate', 'La fecha de inicio tiene el formato incorrecto')
    .optional()
    .isISO8601()
    .toDate(),
  body('endDate', 'La fecha de término tiene el formato incorrecto')
    .optional()
    .isISO8601()
    .toDate(),
  body('isConfirmed', 'El estado de confirmación debe ser \'true\' o \'false\'')
    .optional()
    .isBoolean(),
  body('userId', 'El userId debe ser un número mayor o igual a 1')
    .optional()
    .isInt({ min: 1 }),
  body('fieldId', 'El fieldId debe ser un número mayor o igual a 1')
    .optional()
    .isInt({ min: 1 }),
  body('equipments', 'Los equipamientos tienen el formato incorrecto')
    .optional()
    .isArray(),
  body('equipments.*.equipmentId', 'Los equipmentId deben ser un número mayor o igual a 1')
    .isInt({ min: 1 }),
  validationResultHandler
]
