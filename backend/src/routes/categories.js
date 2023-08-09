import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/categories.js'
import {
  createCategory, deleteCategory, getCategory, getCategories, updateCategory
} from '../controllers/categories.js'

const router = Router()

router.route('/')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getCategories)
  .post(checkAuth, permit('CUSTOMER', 'ADMIN'), validateCreate, createCategory)

router.route('/:id')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getCategory)
  .put(checkAuth, permit('CUSTOMER', 'ADMIN'), validateUpdate, updateCategory)
  .delete(checkAuth, permit('CUSTOMER', 'ADMIN'), deleteCategory)

export default router
