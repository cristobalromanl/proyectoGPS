import axios from './axios'

export const getAll = async () => {
  try {
    const res = await axios.get('/api/categories')

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
    const res = await axios.get(`/api/categories/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const create = async (category) => {
  try {
    const res = await axios.post('/api/categories', category)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const update = async (category) => {
  try {
    const res = await axios.put(`/api/categories/${category.id}`, category)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const remove = async (id) => {
  try {
    const res = await axios.delete(`/api/categories/${id}`)

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}
