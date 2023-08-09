import axios from './axios'

export const getAll = async () => {
  try {
    const res = await axios.get('/api/clubs')

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
    const res = await axios.get(`/api/clubs/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const create = async (clubs) => {
  try {
    const res = await axios.post('/api/clubs', clubs)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const update = async (clubs) => {
  try {
    const res = await axios.put(`/api/clubs/${clubs.id}`, clubs)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const remove = async (id) => {
  try {
    const res = await axios.delete(`/api/clubs/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}
