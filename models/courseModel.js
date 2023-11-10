const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título requerido'],
  },
  description: {
    type: String,
    required: [true, 'Descripción requerida'],
  },
  weeks: {
    type: Number,
    required: [true, 'Semanas requeridas'],
    min: 1,  // Valor mínimo permitido
    max: 52, // Valor máximo permitido
  },
  tuition: {
    type: Number,
    required: [true, 'Tuition requerido'],
    min: 0,  // Valor mínimo permitido
    max: 10000, // Valor máximo permitido
  },
  minimumSkill: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  created: {
    type: Date,
    required: [true, 'Fecha requerida'],
  },
});

module.exports = mongoose.model('Course', courseSchema);
