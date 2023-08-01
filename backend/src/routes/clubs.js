import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/clubs.js'
import { createClub, deleteClub, getClub, getClubs, updateClub } from '../controllers/clubs.js'

const router = Router()

router.route('/')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getClubs)
  .post(checkAuth, permit('CUSTOMER', 'ADMIN'), validateCreate, createClub)

router.route('/:id')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getClub)
  .put(checkAuth, permit('CUSTOMER', 'ADMIN'), validateUpdate, updateClub)
  .delete(checkAuth, permit('CUSTOMER', 'ADMIN'), deleteClub)

export default router
