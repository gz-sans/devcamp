const express = require('express');
const CourseModel = require('../models/courseModel');
const router = express.Router();

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Obtener un curso por su ID
router.get('/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: `No existe un curso con el ID ${courseId}`,
      });
    }
    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Crear un nuevo curso
router.post('/', async (req, res) => {
  try {
    const newCourse = await CourseModel.create(req.body);
    res.status(201).json({
      success: true,
      data: newCourse,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// Modificar un curso por su ID
router.put('/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const updCourse = await CourseModel.findByIdAndUpdate(courseId, req.body, {
      new: true,
    });
    if (!updCourse) {
      return res.status(404).json({
        success: false,
        message: `No existe un curso con el ID ${courseId}`,
      });
    }
    res.json({
      success: true,
      data: updCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Eliminar un curso por su ID
router.delete('/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const delCourse = await CourseModel.findByIdAndDelete(courseId);
    if (!delCourse) {
      return res.status(404).json({
        success: false,
        message: `No existe un curso con el ID ${courseId}`,
      });
    }
    res.json({
      success: true,
      data: delCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
