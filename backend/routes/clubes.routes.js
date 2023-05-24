const { Router } = require('express');
const {
  createClub,
  getClubes,
  getClubById,
  updateClubById,
  deleteClubById
} = require('../controllers/clubes.controller');
const upload = require('../middlewares/handleMulter');
const handleErrors = require('../middlewares/handleErrors');

const router = Router();

router.get('/clubes', getClubes);

router.post('/club', upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'banner', maxCount: 1 }
]), handleErrors, createClub);

router.route('/club/:id')
  .get(getClubById)
  .put(upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
  ]), handleErrors, updateClubById)
  .delete(deleteClubById);

module.exports = router;