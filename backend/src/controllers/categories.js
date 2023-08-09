import db from '../database.js'
import fs from 'fs'
import path from 'path'

export const getCategories = async (_req, res) => {
  try {
    const categories = await db.category.findMany({
      include: { fields: true, equipments: true }
    })

    return res.json(categories)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createCategory = async (req, res) => {
  try {
    const { name, logoPath } = req.body

    if (logoPath && !fs.existsSync(path.resolve(logoPath))) {
      return res.status(404).json({
        message: 'El logo no existe'
      })
    }

    const category = await db.category.create({
      data: { name, logoPath },
      include: { fields: true, equipments: true }
    })

    return res.status(201).json({
      message: 'Categoria guardada correctamente',
      category
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const category = await db.category.findUnique({
      where: { id },
      include: { fields: true, equipments: true }
    })

    if (!category) {
      return res.status(404).json({
        message: 'Categoria no exite'
      })
    }

    return res.json(category)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, logoPath } = req.body

    if (logoPath && !fs.existsSync(path.resolve(logoPath))) {
      return res.status(404).json({
        message: 'El logo no existe'
      })
    }

    const category = await db.category.update({
      where: { id },
      data: { name, logoPath },
      include: { fields: true, equipments: true }
    })

    if (!category) {
      return res.status(404).json({
        message: 'Categoria no existe'
      })
    }

    return res.json({
      message: 'Categoria actualizada correctamente',
      category
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const category = await db.category.delete({ where: { id } })

    if (!category) {
      return res.status(404).json({
        message: 'Categoria no existe'
      })
    }

    return res.json({
      message: 'Categoria eliminada correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
