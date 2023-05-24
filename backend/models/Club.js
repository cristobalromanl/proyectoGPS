const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    minLenght: 1,
    maxLenght: 250,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    required: true,
    trim: true,
  },
  logo_url: {
    type: String,
    trim: true,
  },
  banner_url: {
    type: String,
    trim: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Club', clubSchema);