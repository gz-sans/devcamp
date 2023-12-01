const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/usersModel'); 


//middleware para protejer rutas 
//a usuarios no logeados
exports.protect = async(req,res,next)=>{
    let token
    //verificar si exixte authotisacu¿ion
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]

    }
    if(!token){
        return res.status(401).json({
            succes: false,
            msg:"token invalido"
        })
    } else {
        const decode=jwt.verify(token, process.env.JWT_SECRET_KEY)
        //console.log(decode)
        //añadir al req el user 
        req.user = await UserModel.findById(decode.id)
        next()
    }

}

//middleware para protejer usuarios
// para los que no tenga un rol especifico
exports.authorize = async(req,res,next)=>{
}

