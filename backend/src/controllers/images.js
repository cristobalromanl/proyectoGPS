import path from 'path'
import fs from 'fs/promises'

export const imageUpload = async (req, res) => {
  try {
    const { image } = req.files
    const imageExt = path.extname(image.name)
    const imagePath = 'public/img/' + Date.now() + imageExt

    await image.mv(path.resolve(imagePath))

    return res.json({
      message: 'Imagen guardada correctamente',
      imagePath
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const imageDestroy = async (req, res) => {
  try {
    const { imagePath } = req.body

    await fs.unlink(path.resolve(imagePath))

    return res.json({
      message: 'Imagen eliminada correctamente'
    })
  } catch (error) {
    return res.status(404).json({
      message: 'La imagen no existe'
    })
  }
}
