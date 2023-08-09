import db from '../database.js'

export const getUsers = async (_req, res) => {
  try {
    const users = await db.user.findMany({
      select: { id: true, email: true, fullName: true, phone: true, club: true }
    })

    return res.json(users)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const user = await db.user.findUnique({
      where: { id },
      select: { id: true, email: true, fullName: true, phone: true, club: true }
    })

    if (!user) {
      return res.status(404).json({
        message: 'Usuario no exite'
      })
    }

    return res.json(user)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { email, fullName, region, city, phone, clubId } = req.body

    if (clubId) {
      const club = await db.club.findUnique({ where: { id: clubId } })

      if (!club) {
        return res.status(404).json({
          message: 'El club no existe'
        })
      }
    }

    const user = await db.user.update({
      where: { id },
      data: { email, fullName, region, city, phone, clubId },
      select: { id: true, email: true, fullName: true, phone: true, club: true }
    })

    if (!user) {
      return res.status(404).json({
        message: 'Usuario no existe'
      })
    }

    return res.json({
      message: 'Usuario actualizado correctamente',
      user
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const user = await db.user.delete({ where: { id } })

    if (!user) {
      return res.status(404).json({
        message: 'Usuario no existe'
      })
    }

    return res.json({
      message: 'Usuario eliminado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
