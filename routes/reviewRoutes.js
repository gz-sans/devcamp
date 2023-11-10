const express = require('express');
const ReviewModel = require('../models/reviewModel');
const router = express.Router();

// Rutas relacionadas con las revisiones (reviews)

// Obtener todas las revisiones
router.get('/', async (req, res) => {
  try {
    const reviews = await ReviewModel.find();
    res.json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Obtener una revisión por su ID
router.get('/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const review = await ReviewModel.findById(reviewId);
    if (!review) {
      return res.status(404).json({
        success: false,
        message: `No existe una revisión con el ID ${reviewId}`,
      });
    }
    res.json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Crear una nueva revisión
router.post('/', async (req, res) => {
  try {
    const newReview = await ReviewModel.create(req.body);
    res.status(201).json({
      success: true,
      data: newReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Modificar una revisión por su ID
router.put('/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const updReview = await ReviewModel.findByIdAndUpdate(
      reviewId,
      req.body,
      {
        new: true,
      }
    );
    if (!updReview) {
      return res.status(404).json({
        success: false,
        message: `No existe una revisión con el ID ${reviewId}`,
      });
    }
    res.json({
      success: true,
      data: updReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Eliminar una revisión por su ID
router.delete('/:id', async (req, res) => {
  const reviewId = req.params.id;
  try {
    const delReview = await ReviewModel.findByIdAndDelete(reviewId);
    if (!delReview) {
      return res.status(404).json({
        success: false,
        message: `No existe una revisión con el ID ${reviewId}`,
      });
    }
    res.json({
      success: true,
      data: delReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
//
//
//
//
//