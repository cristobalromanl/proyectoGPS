import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import { validateCreate, validateUpdate } from '../validators/equipments.js'
import {
  createEquipment, deleteEquipment, getEquipment, getEquipments, updateEquipment
} from '../controllers/equipments.js'

const router = Router()

router.route('/')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getEquipments)
  .post(checkAuth, permit('CUSTOMER', 'ADMIN'), validateCreate, createEquipment)

router.route('/:id')
  .get(checkAuth, permit('CUSTOMER', 'ADMIN'), getEquipment)
  .put(checkAuth, permit('CUSTOMER', 'ADMIN'), validateUpdate, updateEquipment)
  .delete(checkAuth, permit('CUSTOMER', 'ADMIN'), deleteEquipment)

export default router
