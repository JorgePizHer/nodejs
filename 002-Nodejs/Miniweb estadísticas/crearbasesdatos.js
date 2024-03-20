var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("Conectado")
    conexion.query('CREATE DATABASE laligastats',function(err,result){
        if(err) throw err;
        console.log("Se ha cargado la base de datos")
    })
})