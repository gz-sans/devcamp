const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema(
    {
        name: {            
            type: String,
            required: [true,
            "Nombre requerido"]
        }
        ,
        email:{
            type: String,
            unique:[true,"el correo ya tiene un usuario registrado"],
            required: [true,
            "Email requerido"],
            //validacion para que tenga que coicidar con el patron
            //o expresion reguales para que diferentes string coincidan
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "email invalido"
            ]
        },
        password:{
            type: String,
            unique: false,
            required: [true,
            "contraseña requerida"],
            minlength:[
                8,
                "la contraseña debe de ser minimo de 8 caracteres"],
            select: false          
        },
        role:{
            type: String,
            enum:["admin","user","publisher"],
            default:"user"
        },
        createdAt :{
            type: Date,
            default:Date.now
        }
    }
)


UserSchema.pre('save', async function(){
    //generar la sal
    const sal=await bcryptjs.genSalt(10,this.password)
    //encriptar el password utilizando la sal
    this.password =await bcryptjs.hash(this.password, sal)
})

//comparar base de datos del password con los del body
UserSchema.methods.compararPassword = async function( password){
    return bcryptjs.compare( password, this.password)
}

//Metodo para crear el jwt
UserSchema.methods.generarJWT= function(){
    return jwt.sign({
            id:this._id,
            name: this.name,
            email:this.email,
            role: this.role
                    },
            process.env.JWT_SECRET_KEY,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
                    )
}
module.exports = mongoose.model("User",
                                UserSchema)