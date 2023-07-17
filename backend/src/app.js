import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.js'
import imageRoutes from './routes/images.js'
import clubRoutes from './routes/clubs.js'
import categoryRoutes from './routes/categories.js'
import equipmentRoutes from './routes/equipments.js'
import fieldRoutes from './routes/fields.js'
import reservationRoutes from './routes/reservations.js'

const app = express()

const port = process.env.PORT || 5000
app.set('port', port)

app.use(cors())
app.options('*', cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

app.use('/api/auth', authRoutes)
app.use('/api/images', imageRoutes)
app.use('/api/clubs', clubRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/equipments', equipmentRoutes)
app.use('/api/fields', fieldRoutes)
app.use('/api/reservations', reservationRoutes)

export default app
