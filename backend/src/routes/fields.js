import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/field.js'
import { createField, deleteField, getField, getFields, updateField } from '../controllers/fields.js'

const router = Router()

router.route('/')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getFields)
  .post(checkAuth, permit('CUSTOMER', 'ADMIN'), validateCreate, createField)

router.route('/:id')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getField)
  .put(checkAuth, permit('CUSTOMER', 'ADMIN'), validateUpdate, updateField)
  .delete(checkAuth, permit('CUSTOMER', 'ADMIN'), deleteField)

export default router
