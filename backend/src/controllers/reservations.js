import db from '../database.js'

export const getReservations = async (_req, res) => {
  try {
    const reservations = await db.reservation.findMany({
      include: {
        field: true,
        equipments: true,
        clubMatch: true,
        user: { select: { id: true, registeredAt: true, email: true, fullName: true, phone: true, club: true } }
      }
    })

    return res.json(reservations)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const createReservation = async (req, res) => {
  try {
    const { startDate, endDate, isConfirmed, match, userId, fieldId, clubMatchId, equipments } = req.body

    const user = await db.user.findUnique({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({
        message: 'El usuario no existe'
      })
    }

    const field = await db.field.findUnique({ where: { id: fieldId } })
    if (!field) {
      return res.status(404).json({
        message: 'La cancha no existe'
      })
    }

    if (clubMatchId) {
      const clubMatch = await db.club.findUnique({ where: { id: clubMatchId } })

      if (!clubMatch) {
        return res.status(404).json({
          message: 'El club no existe'
        })
      }
    }

    const reservation = await db.reservation.create({
      data: { startDate, endDate, isConfirmed, match, userId, fieldId, clubMatchId, equipments: { create: equipments } },
      include: {
        field: true,
        equipments: true,
        clubMatch: true,
        user: { select: { id: true, registeredAt: true, email: true, fullName: true, phone: true } }
      }
    })

    return res.status(201).json({
      message: 'Reservacion guardada correctamente',
      reservation
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const getReservation = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const reservation = await db.reservation.findUnique({
      where: { id },
      include: {
        field: true,
        equipments: true,
        clubMatch: true,
        user: { select: { id: true, registeredAt: true, email: true, fullName: true, phone: true, club: true } }
      }
    })

    if (!reservation) {
      return res.status(404).json({
        message: 'Reservacion no exite'
      })
    }

    return res.json(reservation)
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const updateReservation = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { startDate, endDate, isConfirmed, match, userId, fieldId, clubMatchId, equipments } = req.body

    if (userId) {
      const user = await db.user.findUnique({ where: { id: userId } })
      if (!user) {
        return res.status(404).json({
          message: 'El usuario no existe'
        })
      }
    }

    if (fieldId) {
      const field = await db.field.findUnique({ where: { id: fieldId } })
      if (!field) {
        return res.status(404).json({
          message: 'La cancha no existe'
        })
      }
    }

    if (clubMatchId) {
      const clubMatch = await db.club.findUnique({ where: { id: clubMatchId } })

      if (!clubMatch) {
        return res.status(404).json({
          message: 'El club no existe'
        })
      }
    }

    const equipmentsFound = await db.equipment.findMany({
      where: { id: { in: equipments?.map(val => val.equipmentId) } }
    })
    if (equipments && equipmentsFound.length !== equipments.length) {
      return res.status(404).json({
        message: 'Uno o más equipamientos no existen'
      })
    }

    if (equipments) {
      await db.equipmentsOnReservations.deleteMany({ where: { reservationId: id } })
    }

    const reservation = await db.reservation.update({
      where: { id },
      data: { startDate, endDate, isConfirmed, match, userId, fieldId, clubMatchId, equipments: { create: equipments } },
      include: {
        field: true,
        equipments: true,
        clubMatch: true,
        user: { select: { id: true, registeredAt: true, email: true, fullName: true, phone: true } }
      }
    })

    if (!reservation) {
      return res.status(404).json({
        message: 'Reservacion no existe'
      })
    }

    return res.json({
      message: 'Reservacion actualizada correctamente',
      reservation
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const deleteReservation = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const reservation = await db.reservation.delete({ where: { id } })

    if (!reservation) {
      return res.status(404).json({
        message: 'Reservacion no existe'
      })
    }

    return res.json({
      message: 'Reservacion eliminado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}
