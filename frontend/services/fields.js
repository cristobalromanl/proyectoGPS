import axios from './axios'

export const getAll = async () => {
  try {
    const res = await axios.get('/api/fields')

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
    const res = await axios.get(`/api/fields/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const create = async (field) => {
  try {
    const res = await axios.post('/api/fields', field)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const update = async (field) => {
  try {
    const res = await axios.put(`/api/fields/${field.id}`, field)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const remove = async (id) => {
  try {
    const res = await axios.delete(`/api/fields/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}
