import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/categories.js'
import {
  createCategory, deleteCategory, getCategory, getCategories, updateCategory
} from '../controllers/categories.js'

const router = Router()

router.route('/')
  .get(checkAuth, getCategories)
  .post(checkAuth, permit('ADMIN'), validateCreate, createCategory)

router.route('/:id')
  .get(checkAuth, getCategory)
  .put(checkAuth, permit('ADMIN'), validateUpdate, updateCategory)
  .delete(checkAuth, permit('ADMIN'), deleteCategory)

export default router
