import bcrypt from 'bcryptjs'
import db from '../database.js'
import { generateToken, deleteToken } from '../services/jwt.js'

export const signUp = async (req, res) => {
  try {
    const { email, fullName, password, phone } = req.body

    const user = await db.user.findUnique({ where: { email } })
    if (user) {
      return res.status(400).json({
        message: 'El usuario ya existe'
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    await db.user.create({
      data: { email, fullName, password: hash, phone }
    })

    return res.status(201).json({
      message: 'Usuario registrado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await db.user.findFirst({ where: { email } })
    if (!user) {
      return res.status(404).json({
        message: 'El usuario no existe'
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({
        message: 'Contraseña incorrecta'
      })
    }

    const token = generateToken({ uid: user.id }, res)

    return res.json({
      message: 'El usuario ha iniciado sesión correctamente',
      token
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }
}

export const signOut = (_req, res) => {
  deleteToken(res)

  return res.json({
    message: 'El usuario ha cerrado sesión correctamente'
  })
}
