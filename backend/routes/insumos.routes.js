const { Router } = require('express');
const {
  createInsumo,
  getInsumos,
  getInsumoById,
  updateInsumoById,
  deleteInsumoById
} = require('../controllers/insumos.controller');
const upload = require('../middlewares/handleMulter');
const handleErrors = require('../middlewares/handleErrors');

const router = Router();

router.get('/insumos', getInsumos);

router.post('/insumo', upload.fields([
  { name: 'imagen', maxCount: 1 }
]), handleErrors, createInsumo);

router.route('/insumo/:id')
  .get(getInsumoById)
  .put(upload.fields([
    { name: 'imagen', maxCount: 1 }
  ]), handleErrors, updateInsumoById)
  .delete(deleteInsumoById);

module.exports = router;