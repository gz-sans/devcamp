
//puede usar mongodb://127.0.0.1/devcamp-2687386
const mongoose = require('mongoose');

// Función para conectar a la base de datos
const conectarDB = async () => {
    // Conecta a la base de datos utilizando la URL especificada en la variable de entorno MONGO_URL
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Conectado".bgBlue.red);
}

// Exporta la función para poder utilizarla en otros archivos
module.exports = conectarDB;
