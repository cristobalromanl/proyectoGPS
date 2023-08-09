import db from '../database.js'
import fs from 'fs'
import path from 'path'

export const getEquipments = async (_req, res) => {
  try {
    const equipments = await db.equipment.findMany({
      include: { category: true, reservations: true }
    })

    return res.json(equipments)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createEquipment = async (req, res) => {
  try {
    const { name, description, imagePath, price, quantity, categoryId } = req.body

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

    const equipment = await db.equipment.create({
      data: { name, description, imagePath, price, quantity, categoryId },
      include: { category: true, reservations: true }
    })

    return res.status(201).json({
      message: 'Equipamiento guardado correctamente',
      equipment
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getEquipment = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const equipment = await db.equipment.findUnique({
      where: { id },
      include: { category: true, reservations: true }
    })

    if (!equipment) {
      return res.status(404).json({
        message: 'Equipamiento no exite'
      })
    }

    return res.json(equipment)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateEquipment = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, description, imagePath, price, quantity, categoryId } = req.body

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

    const equipment = await db.equipment.update({
      where: { id },
      data: { name, description, imagePath, price, quantity, categoryId },
      include: { category: true, reservations: true }
    })

    if (!equipment) {
      return res.status(404).json({
        message: 'Equipamiento no existe'
      })
    }

    return res.json({
      message: 'Equipamiento actualizado correctamente',
      equipment
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteEquipment = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const equipment = await db.equipment.delete({ where: { id } })

    if (!equipment) {
      return res.status(404).json({
        message: 'Equipamiento no existe'
      })
    }

    return res.json({
      message: 'Equipamiento eliminado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
