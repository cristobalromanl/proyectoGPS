import { Router } from 'express'
import { validateSignUp, validateSignIn } from '../validators/auth.js'
import { signUp, signIn, signOut } from '../controllers/auth.js'

const router = Router()

router.post('/signup', validateSignUp, signUp)

router.post('/signin', validateSignIn, signIn)

router.post('/signout', signOut)

export default router
