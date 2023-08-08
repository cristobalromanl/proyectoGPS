import axios from './axios'

export const signUp = async (user) => {
  try {
    console.log(user)
    const res = await axios.post('/api/auth/signup', user)
  
    return res.data
  } catch (error) {
    console.log(error)
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const signIn = async (email, password) => {
  try {
    const res = await axios.post('/api/auth/signin',
      { email, password }
    )
  
    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const signOut = async () => {
  try {
    const res = await axios.post('/api/auth/signout')

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}

export const verifyAuth = async () => {
  try {
    const res = await axios.post('/api/auth/verify')

    return res.data
  } catch (error) {
    const newError = new Error(error.response.statusText)
    newError.status = error.response.status

    throw newError
  }
}
