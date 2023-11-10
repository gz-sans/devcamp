const express = require('express');
const UserModel = require('../models/userModel'); // Importa el modelo de usuario

const router = express.Router(); // Define un enrutador

// Rutas para la gestión de usuarios

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    // Utiliza el modelo para buscar y obtener todos los usuarios en la base de datos
    const users = await UserModel.find();
    
    res.json({
        success: true,
        data: users
    });
});

// Obtener un usuario por su ID
router.get("/:id", async (req, res) => {
    // Extrae el ID del usuario del parámetro de la URL
    const userId = req.params.id;
    const user = await UserModel.findById(userId);

    res.json({
        success: true,
        data: user
    });
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
    // El nuevo usuario se envía al servidor a través del cuerpo de la solicitud del cliente
    const newUser = await UserModel.create(req.body);

    res.json({
        success: true,
        data: newUser
    });
});

// Modificar un usuario por su ID
router.put("/:id", async (req, res) => {
    const userId = req.params.id;
    // Utiliza el modelo para buscar y actualizar un usuario por su ID
    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });

    res.json({
        success: true,
        data: updatedUser
    });
});

// Eliminar un usuario por su ID
router.delete("/:id", async (req, res) => {
    const userId = req.params.id;
    // Utiliza el modelo para buscar y eliminar un usuario por su ID
    const deletedUser = await UserModel.findByIdAndDelete(userId);

    res.json({
        success: true,
        data: deletedUser
    });
});

module.exports = router; // Exporta el enrutador
