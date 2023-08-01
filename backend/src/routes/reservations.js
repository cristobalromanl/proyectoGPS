import { Router } from 'express'
import { checkAuth } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/reservations.js'
import {
  createReservation, deleteReservation, getReservation, getReservations, updateReservation
} from '../controllers/reservations.js'

const router = Router()

router.route('/')
  .get(checkAuth, getReservations)
  .post(checkAuth, validateCreate, createReservation)

router.route('/:id')
  .get(checkAuth, getReservation)
  .put(checkAuth, validateUpdate, updateReservation)
  .delete(checkAuth, deleteReservation)

export default router
