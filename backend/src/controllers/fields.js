import db from '../database.js'
import fs from 'fs'
import path from 'path'

export const getFields = async (_req, res) => {
  try {
    const fields = await db.field.findMany({
      include: { category: true, club: true, reservations: true }
    })

    return res.json(fields)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createField = async (req, res) => {
  try {
    const { name, description, imagePath, price, categoryId, clubId } = req.body

    if (imagePath && !fs.existsSync(path.resolve(imagePath))) {
      return res.status(404).json({
        message: 'La imagen no existe'
      })
    }

    const category = await db.category.findFirst({ where: { id: categoryId } })
    if (!category) {
      return res.status(404).json({
        message: 'La categoría no existe'
      })
    }

    const club = await db.club.findFirst({ where: { id: clubId } })
    if (!club) {
      return res.status(404).json({
        message: 'El club no existe'
      })
    }

    const field = await db.field.create({
      data: { name, description, imagePath, price, categoryId, clubId },
      include: { category: true, club: true, reservations: true }
    })

    return res.status(201).json({
      message: 'Cancha guardada correctamente',
      field
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getField = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const field = await db.field.findUnique({
      where: { id },
      include: { category: true, club: true, reservations: true }
    })

    if (!field) {
      return res.status(404).json({
        message: 'Cancha no exite'
      })
    }

    return res.json(field)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateField = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, description, imagePath, price, categoryId, clubId } = req.body

    if (imagePath && !fs.existsSync(path.resolve(imagePath))) {
      return res.status(404).json({
        message: 'La imagen no existe'
      })
    }

    const category = await db.category.findFirst({ where: { id: categoryId } })
    if (!category) {
      return res.status(404).json({
        message: 'La categoría no existe'
      })
    }

    const club = await db.club.findFirst({ where: { id: clubId } })
    if (!club) {
      return res.status(404).json({
        message: 'El club no existe'
      })
    }

    const field = await db.field.update({
      where: { id },
      data: { name, description, imagePath, price, categoryId, clubId },
      include: { category: true, club: true, reservations: true }
    })

    if (!field) {
      return res.status(404).json({
        message: 'Cancha no existe'
      })
    }

    return res.json({
      message: 'Cancha actualizada correctamente',
      field
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteField = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const field = await db.field.delete({ where: { id } })

    if (!field) {
      return res.status(404).json({
        message: 'Cancha no existe'
      })
    }

    return res.json({
      message: 'Cancha eliminada correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
