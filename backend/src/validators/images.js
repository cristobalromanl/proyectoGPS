import { body } from 'express-validator'
import validationResultHandler from '../middlewares/validationResultHandler.js'

export const validateImageUpload = [
  (req, res, next) => {
    const image = req.files?.image

    if (!image) {
      return res.status(400).json({
        message: 'No se ha subido un archivo.'
      })
    } else if (image.truncated) {
      return res.status(413).json({
        message: 'El archivo es demasiado grande'
      })
    }

    next()
  }
]

export const validateImageDestroy = [
  body('imagePath', 'El path de la imagen no debe ser vacío')
    .trim()
    .notEmpty(),
  validationResultHandler
]
