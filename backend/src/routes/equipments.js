import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/equipments.js'
import {
  createEquipment, deleteEquipment, getEquipment, getEquipments, updateEquipment
} from '../controllers/equipments.js'

const router = Router()

router.route('/')
  .get(checkAuth, getEquipments)
  .post(checkAuth, permit('ADMIN'), validateCreate, createEquipment)

router.route('/:id')
  .get(checkAuth, getEquipment)
  .put(checkAuth, permit('ADMIN'), validateUpdate, updateEquipment)
  .delete(checkAuth, permit('ADMIN'), deleteEquipment)

export default router
