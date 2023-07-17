import db from '../database.js'
import fs from 'fs'
import path from 'path'

export const getClubs = async (_req, res) => {
  try {
    const clubs = await db.club.findMany({
      include: {
        fields: true,
        equipments: true,
        users: {
          select: { id: true, registeredAt: true, email: true, fullName: true, phone: true }
        }
      }
    })

    return res.json(clubs)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createClub = async (req, res) => {
  try {
    const { name, logoPath } = req.body

    if (logoPath && !fs.existsSync(path.resolve(logoPath))) {
      return res.status(404).json({
        message: 'El logo no existe'
      })
    }

    const club = await db.club.create({
      data: { name, logoPath },
      include: {
        fields: true,
        equipments: true,
        users: {
          select: { id: true, registeredAt: true, email: true, fullName: true, phone: true }
        }
      }
    })

    return res.status(201).json({
      message: 'Club guardado correctamente',
      club
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getClub = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const club = await db.club.findUnique({
      where: { id },
      include: {
        fields: true,
        equipments: true,
        users: {
          select: { id: true, registeredAt: true, email: true, fullName: true, phone: true }
        }
      }
    })

    if (!club) {
      return res.status(404).json({
        message: 'Club no exite'
      })
    }

    return res.json(club)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateClub = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { name, logoPath } = req.body

    if (logoPath && !fs.existsSync(path.resolve(logoPath))) {
      return res.status(404).json({
        message: 'El logo no existe'
      })
    }

    const club = await db.club.update({
      where: { id },
      data: { name, logoPath },
      include: {
        fields: true,
        equipments: true,
        users: {
          select: { id: true, registeredAt: true, email: true, fullName: true, phone: true }
        }
      }
    })

    if (!club) {
      return res.status(404).json({
        message: 'Club no existe'
      })
    }

    return res.json({
      message: 'Club actualizado correctamente',
      club
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteClub = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const club = await db.club.delete({ where: { id } })

    if (!club) {
      return res.status(404).json({
        message: 'Club no existe'
      })
    }

    return res.json({
      message: 'Club eliminado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
