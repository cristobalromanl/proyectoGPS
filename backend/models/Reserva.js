const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  fecha_inicio: {
    type: Date,
    required: true,
  },
  fecha_termino: {
    type: Date,
    required: true,
  },
  cancha: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cancha',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Reserva', reservaSchema);