var mongoose = require('mongoose');
var archivos = require('fs');

const conexion = 'mongodb://127.0.0.1/laligastats'

const goleadoresSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    goles: String,
    equipo: String
})

const goleadores = mongoose.model("goleadores", goleadoresSchema)

mongoose.connect(conexion).then(function () {
    console.log("Conectado a Mongo")
    
    goleadores.find({})
       .exec()
            .then(function (goleadores) {
                // Save the JSON data to a file
                archivos.writeFile('goleadoresmongo.json', JSON.stringify(goleadores), function (err) {
                    if (err) {
                        console.error("Error al guardar el json:", err);
                    } else {
                        console.log("JSON guardado en goleadoresmongo.json");
                    }
                });
            })
            .catch(function (error) {
                console.error("Error fetching goleadores:", error);
            });
    }).catch(function (error) {
        console.error("Error al conectar con MongoDB:", error);
    });