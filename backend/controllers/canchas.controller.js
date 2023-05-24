const Cancha = require('../models/Cancha');

const createCancha = async (req, res) => {
  try {
    const cancha = new Cancha({
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      club: req.body.club,
      imagen_url: req.files.imagen[0].path,
      precio: req.body.precio
    });

    const nuevaCancha = await cancha.save();
  
    return res.status(201).json({
      message: 'Cancha guardada correctamente',
      cancha: nuevaCancha
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getCanchas = async (_req, res) => {
  try {
    const canchas = await Cancha.find();

    return res.json(canchas);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getCanchaById = async (req, res) => {
  try {
    const cancha = await Cancha.findById(req.params.id);

    if (!cancha) {
      return res.status(404).json({
        message: 'Cancha no exite'
      });
    }
  
    return res.json(cancha);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateCanchaById = async (req, res) => {
  try {
    const canchaActualizada = await Cancha.findByIdAndUpdate(req.params.id, {
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      club: req.body.club,
      imagen_url: req.files.imagen[0].path,
      precio: req.body.precio
    }, {
      new: true
    });

    if (!canchaActualizada) {
      return res.status(404).json({
        message: 'Cancha no existe'
      });
    }
  
    return res.json({
      message: 'Cancha actualizada correctamente',
      cancha: canchaActualizada
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteCanchaById = async (req, res) => {
  try {
    const canchaEliminada = await Cancha.findByIdAndDelete(req.params.id);

    if (!canchaEliminada) {
      return res.status(404).json({
        message: 'Cancha no existe'
      });
    }
  
    return res.json({
      message: 'Cancha eliminada correctamente'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createCancha,
  getCanchas,
  getCanchaById,
  updateCanchaById,
  deleteCanchaById
}