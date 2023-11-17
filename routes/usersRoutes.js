const express = require('express');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/usersModel'); // Importa el modelo de usuario

const router = express.Router(); // Define un enrutador

// Ruta para registrar un nuevo usuario
router.post("/register", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        // Manejar errores específicos y devolver mensajes de error apropiados
        if (error.code === 11000 && error.keyPattern.email) {
            res.status(400).json({
                success: false,
                error: "El correo electrónico ya está registrado. Por favor, elige otro."
            });
        } else {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
});

// Ruta para iniciar sesión
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Validar la presencia de email y contraseña
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Falta el email o la contraseña."
        });
    }

    try {
        // Buscar usuario por email
        const user = await UserModel.findOne({ email }).select("+password");

        // Verificar si el usuario existe
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "El email o la contraseña son incorrectos."
            });
        }

        // Verificar la contraseña
        if (await user.compararPassword(password)) {
            return res.status(200).json({
                success: true,
                message: "Usuario logeado correctamente.",
                data: user
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Contraseña incorrecta."
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Puedes descomentar las siguientes rutas según tus necesidades

/*
// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Obtener un usuario por su ID
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Modificar un usuario por su ID
router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });
        res.json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Eliminar un usuario por su ID
router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(userId);
        res.json({
            success: true,
            data: deletedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});
*/

module.exports = router; // Exporta el enrutador
