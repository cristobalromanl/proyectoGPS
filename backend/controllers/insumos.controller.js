const Insumo = require('../models/Insumo');

const createInsumo = async (req, res) => {
  try {
    const insumo = new Insumo({
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      club: req.body.club,
      imagen_url: req.files.imagen[0].path,
      stock: req.body.stock,
      precio: req.body.precio
    });

    const nuevaInsumo = await insumo.save();
  
    return res.status(201).json({
      message: 'Insumo guardada correctamente',
      insumo: nuevaInsumo
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getInsumos = async (_req, res) => {
  try {
    const insumos = await Insumo.find();

    return res.json(insumos);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getInsumoById = async (req, res) => {
  try {
    const insumo = await Insumo.findById(req.params.id);

    if (!insumo) {
      return res.status(404).json({
        message: 'Insumo no exite'
      });
    }
  
    return res.json(insumo);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateInsumoById = async (req, res) => {
  try {
    const insumoActualizada = await Insumo.findByIdAndUpdate(req.params.id, {
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      club: req.body.club,
      imagen_url: req.files.imagen[0].path,
      stock: req.body.stock,
      precio: req.body.precio
    }, {
      new: true
    });

    if (!insumoActualizada) {
      return res.status(404).json({
        message: 'Insumo no existe'
      });
    }
  
    return res.json({
      message: 'Insumo actualizada correctamente',
      Insumo: insumoActualizada
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteInsumoById = async (req, res) => {
  try {
    const insumoEliminada = await Insumo.findByIdAndDelete(req.params.id);

    if (!insumoEliminada) {
      return res.status(404).json({
        message: 'Insumo no existe'
      });
    }
  
    return res.json({
      message: 'Insumo eliminada correctamente'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createInsumo,
  getInsumos,
  getInsumoById,
  updateInsumoById,
  deleteInsumoById
}