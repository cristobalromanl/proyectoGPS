import axios from './axios'

export const getAll = async () => {
  try {
    const res = await axios.get('/api/reservations')

    res.data.sort((a, b) => (
      new Date(b.createdAt) - new Date(a.createdAt)
    ))

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const getOne = async (id) => {
  try {
    const res = await axios.get(`/api/reservations/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const create = async (reservation) => {
  try {
    const res = await axios.post('/api/reservations', reservation)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const update = async (reservation) => {
  try {
    const res = await axios.put(`/api/reservations/${reservation.id}`, reservation)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const remove = async (id) => {
  try {
    const res = await axios.delete(`/api/reservations/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}
