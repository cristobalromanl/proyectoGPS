import axios from './axios';


export const getEquipament = async () => {
  try {
    const res = await axios.get('/api/equipments')

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