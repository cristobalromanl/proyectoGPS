const mongoose = require('mongoose');

const insumoSchema = new mongoose.Schema({
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
  stock: {
    type: Number,
    default: 1,
  },
  precio: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Insumo', insumoSchema);