const { Router } = require('express');
const {
  createReserva,
  getReservas,
  getReservaById,
  updateReservaById,
  deleteReservaById
} = require('../controllers/reservas.controller');

const router = Router();

router.get('/reservas', getReservas);

router.post('/reserva', createReserva);

router.route('/reserva/:id')
  .get(getReservaById)
  .put(updateReservaById)
  .delete(deleteReservaById);

module.exports = router;