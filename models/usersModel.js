const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Definición del esquema de usuario
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nombre requerido"]
    },
    email: {
        type: String,
        unique: [true, "El correo ya tiene un usuario registrado"],
        required: [true, "Email requerido"],
        match: [
            // Expresión regular para validar el formato del correo electrónico
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Email inválido"
        ]
    },
    password: {
        type: String,
        unique: false,
        required: [true, "Contraseña requerida"],
        minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "user", "publisher"],
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware pre-save para encriptar la contraseña antes de guardar en la base de datos
UserSchema.pre('save', async function () {
    try {
        // Generar la sal
        const salt = await bcryptjs.genSalt(10);
        // Encriptar el password utilizando la sal generada
        this.password = await bcryptjs.hash(this.password, salt);
    } catch (error) {
        throw new Error(error);
    }
});

// Método para comparar la contraseña almacenada en la base de datos con la proporcionada en el cuerpo
UserSchema.methods.compararPassword = async function (password) {
    return bcryptjs.compare(password, this.password);
};

// Exportar el modelo de usuario
module.exports = mongoose.model("User", UserSchema);
