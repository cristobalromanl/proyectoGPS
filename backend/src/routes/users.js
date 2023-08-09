import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateUpdate } from '../validators/users.js'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'

const router = Router()

router.route('/').get(checkAuth, getUsers)

router.route('/:id')
  .get(checkAuth, getUser)
  .put(checkAuth, validateUpdate, updateUser)
  .delete(checkAuth, permit('ADMIN'), deleteUser)

export default router
