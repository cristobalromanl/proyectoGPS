const mongoose = require('mongoose');

const canchaSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true,
  },
  club: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true,
  },
  imagen_url: {
    type: String,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Cancha', canchaSchema);