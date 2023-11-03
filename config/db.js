const mongoose = require("mongoose");

async function conectarDB() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongodb Conectado");
}

module.exports = conectarDB;
