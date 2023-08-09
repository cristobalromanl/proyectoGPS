import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/field.js'
import { createField, deleteField, getField, getFields, updateField } from '../controllers/fields.js'

const router = Router()

router.route('/')
  .get(checkAuth, getFields)
  .post(checkAuth, permit('ADMIN'), validateCreate, createField)

router.route('/:id')
  .get(checkAuth, getField)
  .put(checkAuth, permit('ADMIN'), validateUpdate, updateField)
  .delete(checkAuth, permit('ADMIN'), deleteField)

export default router
