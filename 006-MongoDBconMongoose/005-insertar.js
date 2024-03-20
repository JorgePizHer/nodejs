var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/contacto'

const formularioSchema = new mongoose.Schema({
    nombre:String,
    asunto:String,
    mensaje:String,
    fecha:String
})

const Formulario = mongoose.model("Formulario",formularioSchema)

const NuevoFormulario = new Formulario ({
        nombre:"Jorge",
        asunto:"Este es un mensaje desde node",
        mensaje: "Este es el cuerpo del mensaje",
        fecha:"2024-03-05"  
})
mongoose.connect(conexion).then(function(){
    console.log("Conectado a Mongo")
    NuevoFormulario.save()
        .then(function(){
        console.log("Insertado")
    })
})