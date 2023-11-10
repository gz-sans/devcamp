const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título requerido'],
  },
  comment: {
    type: String,
    required: [true, 'Comentario requerido'],
  },
  rating: {
    type: Number,
    required: [true, 'Calificación requerida'],
    min: 1,  // Valor mínimo permitido
    max: 5,  // Valor máximo permitido
  },
});

module.exports = mongoose.model('Review', reviewSchema);
