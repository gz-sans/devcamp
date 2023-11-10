const mongoose = require('mongoose');

// Definición de un esquema de usuario
const UserSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: [true, "Nombre requerido"] // El nombre es una cadena requerida
        },
        "email": {
            type: String,
            required: [true, "Email requerido"] // El email es una cadena requerida
        },
        "role": {
            type: String,
            required: [true] // El rol es una cadena requerida
        },
        "password": {
            type: String,
            unique: true, // La contraseña es única, no puede haber duplicados
            required: [true, "Contraseña requerida"] // La contraseña es una cadena requerida
        }
    }
);

// Exporta el modelo de usuario basado en el esquema definido
module.exports = mongoose.model("User", UserSchema);
