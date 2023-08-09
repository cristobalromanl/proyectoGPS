import { Router } from 'express'
import { checkAuth } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/clubs.js'
import { createClub, deleteClub, getClub, getClubs, updateClub } from '../controllers/clubs.js'

const router = Router()

router.route('/')
  .get(checkAuth, getClubs)
  .post(checkAuth, validateCreate, createClub)

router.route('/:id')
  .get(checkAuth, getClub)
  .put(checkAuth, validateUpdate, updateClub)
  .delete(checkAuth, deleteClub)

export default router
