const mongoose = require("mongoose");

const conectarDB = async()=> {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Mongodb Conectado");
}

module.exports = conectarDB;


