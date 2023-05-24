const Reserva = require('../models/Reserva');

const createReserva = async (req, res) => {
  try {
    const reserva = new Reserva({
      usuario: req.body.usuario,
      fecha_inicio: req.body.fecha_inicio,
      fecha_termino: req.body.fecha_termino,
      cancha: req.body.cancha
    });

    const nuevaReserva = await reserva.save();

    return res.status(201).json({
      message: 'Reserva guardada correctamente',
      Reserva: nuevaReserva
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getReservas = async (_req, res) => {
  try {
    const reservas = await Reserva.find();

    return res.json(reservas);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);

    if (!reserva) {
      return res.status(404).json({
        message: 'Reserva no exite'
      });
    }

    return res.json(reserva);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateReservaById = async (req, res) => {
  try {
    const reservaActualizada = await Reserva.findByIdAndUpdate(req.params.id, {
      usuario: req.body.usuario,
      fecha_inicio: req.body.fecha_inicio,
      fecha_termino: req.body.fecha_termino,
      cancha: req.body.cancha
    }, {
      new: true
    });

    if (!reservaActualizada) {
      return res.status(404).json({
        message: 'Reserva no existe'
      });
    }

    return res.json({
      message: 'Reserva actualizada correctamente',
      Reserva: reservaActualizada
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteReservaById = async (req, res) => {
  try {
    const reservaEliminada = await Reserva.findByIdAndDelete(req.params.id);

    if (!reservaEliminada) {
      return res.status(404).json({
        message: 'Reserva no existe'
      });
    }

    return res.json({
      message: 'Reserva eliminada correctamente'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createReserva,
  getReservas,
  getReservaById,
  updateReservaById,
  deleteReservaById
}