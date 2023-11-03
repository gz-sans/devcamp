const mongoose = require("mongoose");

//definir schema
const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "nombre requedorido"],
  },
  phone: {
    type: Number,
    required: [true, "telefono requerido"],
    maxlength: [10, " telefono max 10 dijitos "],
    minlength: [7, "debe 7 dijitos minimo "],
  },
  addres: {
    type: String,
    required: [true, " direcion requerdida"],
  },
  topics: {
    type: [String],
    Enum: ["Backend", "Frontend", "Devops", "AI"],
  },
  createdAt: Date,
});
module.exports = mongoose.model("Bootcamp", bootcampSchema);


