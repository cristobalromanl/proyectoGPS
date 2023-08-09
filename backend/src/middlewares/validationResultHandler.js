import { validationResult } from 'express-validator'

const validationResultHandler = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array().map(error => error.msg)
    })
  }

  next()
}

export default validationResultHandler
