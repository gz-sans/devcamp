const mongoose = require('mongoose');

// Definición de un esquema para la colección "Bootcamp"
const BootcampSchema = new mongoose.Schema({
  // Nombre del bootcamp
  name: {
    type: String,
    unique: true, // El nombre debe ser único en la colección
    required: [true, "Nombre requerido"] // El nombre es un campo requerido
  },
  // Número de teléfono del bootcamp
  phone: {
    type: Number,
    required: [true, "Teléfono requerido"], // El teléfono es un campo requerido
    min: [9, "El teléfono debe tener al menos 9 dígitos"] // El teléfono debe tener al menos 9 dígitos
  },
  // Dirección del bootcamp
  address: {
    type: String,
    required: [true, "Dirección requerida"] // La dirección es un campo requerido
  },
  // Temas o áreas del bootcamp
  topics: {
    type: [String],
    enum: ["Backend", "Frontend", "Devops", "AI"] // Los temas deben ser uno de los valores enumerados
  },
  // Fecha de creación del bootcamp
  createdAt: {
    type: Date,
    required: [true, "Fecha requerida"] // La fecha de creación es un campo requerido
  }
});

// Creación del modelo "Bootcamp" basado en el esquema
module.exports = mongoose.model("Bootcamp", BootcampSchema);
