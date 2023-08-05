import fileUpload from 'express-fileupload'

export default fileUpload({
  createParentPath: true,
  limits: { fileSize: 5 * 1024 * 1024 }
})
