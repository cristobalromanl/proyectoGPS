import { Router } from 'express'
import { checkAuth, permit } from '../middlewares/auth.js'
import fileUpload from '../middlewares/fileUpload.js'
import { validateImageUpload, validateImageDestroy } from '../validators/images.js'
import { imageDestroy, imageUpload } from '../controllers/images.js'

const router = Router()

router.post('/upload', checkAuth, permit('CUSTOMER', 'ADMIN'), fileUpload, validateImageUpload, imageUpload)

router.post('/destroy', checkAuth, permit('CUSTOMER', 'ADMIN'), validateImageDestroy, imageDestroy)

export default router
