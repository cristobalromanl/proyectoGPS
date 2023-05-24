const Club = require('../models/Club');

const createClub = async (req, res) => {
  try {
    const club = new Club({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      direccion: req.body.direccion,
      logo_url: req.files.logo[0].path,
      banner_url: req.files.banner[0].path,
      admin: req.body.admin
    });

    const nuevoClub = await club.save();
  
    return res.status(201).json({
      message: 'Club guardado correctamente',
      club: nuevoClub
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getClubes = async (_req, res) => {
  try {
    const clubes = await Club.find();

    return res.json(clubes);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({
        message: 'Club no exite'
      });
    }
  
    return res.json(club);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const updateClubById = async (req, res) => {
  try {
    const clubActualizado = await Club.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      direccion: req.body.direccion,
      logo_url: req.files.logo[0].path,
      banner_url: req.files.banner[0].path,
      admin: req.body.admin
    }, {
      new: true
    });

    if (!clubActualizado) {
      return res.status(404).json({
        message: 'Club no existe'
      });
    }
  
    return res.json({
      message: 'Club actualizado correctamente',
      club: clubActualizado
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteClubById = async (req, res) => {
  try {
    const clubEliminado = await Club.findByIdAndDelete(req.params.id);

    if (!clubEliminado) {
      return res.status(404).json({
        message: 'Club no existe'
      });
    }
  
    return res.json({
      message: 'Club eliminado correctamente'
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createClub,
  getClubes,
  getClubById,
  updateClubById,
  deleteClubById
}