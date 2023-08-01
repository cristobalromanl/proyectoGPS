import db from '../database.js'
import { verifyToken } from '../services/jwt.js'

export const checkAuth = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken.substring(7)
    const { uid } = verifyToken(token)

    const user = await db.user.findFirst({ where: { id: uid } })
    if (!user) throw new Error()

    req.user = {
      id: user.id, username: user.username, role: user.role
    }

    next()
  } catch (error) {
    return res.status(401).json({
      message: 'El usuario no se ha autenticado'
    })
  }
}

export const permit = (...roles) => {
  return async (req, res, next) => {
    const { role } = req.user

    if (!roles.includes(role)) {
      return res.status(403).json({
        message: 'El usuario no tiene acceso permitido'
      })
    }

    next()
  }
}
