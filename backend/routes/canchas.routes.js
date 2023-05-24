const { Router } = require('express');
const {
  createCancha,
  getCanchas,
  getCanchaById,
  updateCanchaById,
  deleteCanchaById
} = require('../controllers/canchas.controller');
const upload = require('../middlewares/handleMulter');
const handleErrors = require('../middlewares/handleErrors');

const router = Router();

router.get('/canchas', getCanchas);

router.post('/cancha', upload.fields([
  { name: 'imagen', maxCount: 1 }
]), handleErrors, createCancha);

router.route('/cancha/:id')
  .get(getCanchaById)
  .put(upload.fields([
    { name: 'imagen', maxCount: 1 }
  ]), handleErrors, updateCanchaById)
  .delete(deleteCanchaById);

module.exports = router;