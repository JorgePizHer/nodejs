var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const Formulario = mongoose.model("Formulario",formularioSchema)

mongoose.connect(conexion).then(function(){
    console.log("Conectado a Mongo")
    Formulario.find({})
    .exec()
    .then(function(formularios){
        console.log(formularios)
    })
})