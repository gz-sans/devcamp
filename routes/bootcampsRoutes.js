const express = require('express');
const BootcampModel = require('../models/bootcampModel');
const mongoose = require('mongoose');

const router = express.Router();

// Obtener todos los bootcamps
router.get('/', async (req, res) => {
  try {
    const bootcamps = await BootcampModel.find();
    if (bootcamps.length > 0) {
      res.status(200).json({
        success: true,
        data: bootcamps,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No hay bootcamps',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
//
// Obtener un bootcamp por ID
router.get('/:id', async (req, res) => {
  const bootcampId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(bootcampId)) {
      return res.status(400).json({
        success: false,
        message: 'Identificador es inválido',
      });
    }
    const bootcamp = await BootcampModel.findById(bootcampId);
    if (bootcamp) {
      res.json({
        success: true,
        data: bootcamp,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No existe el bootcamp con ID ${bootcampId}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Crear un nuevo bootcamp
router.post('/', async (req, res) => {
  try {
    const newBootcamp = await BootcampModel.create(req.body);
    res.status(201).json({
      success: true,
      data: newBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Actualizar un bootcamp por ID
router.put('/:id', async (req, res) => {
  const bootcampId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(bootcampId)) {
      return res.status(400).json({
        success: false,
        message: 'Identificador es inválido',
      });
    }
    const updatedBootcamp = await BootcampModel.findByIdAndUpdate(
      bootcampId,
      req.body,
      {
        new: true,
      }
    );
    if (updatedBootcamp) {
      res.status(200).json({
        success: true,
        data: updatedBootcamp,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No existe el bootcamp con ID ${bootcampId}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Eliminar un bootcamp por ID
router.delete('/:id', async (req, res) => {
  const bootcampId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(bootcampId)) {
      return res.status(400).json({
        success: false,
        message: 'Identificador es inválido',
      });
    }
    const deletedBootcamp = await BootcampModel.findByIdAndDelete(bootcampId);
    if (deletedBootcamp) {
      res.status(200).json({
        success: true,
        data: deletedBootcamp,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `No existe el bootcamp con ID ${bootcampId}`,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
