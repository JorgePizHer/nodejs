var mysql = require('mysql')
var archivos = require('fs');

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"laligastats"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("Conectado")
    
    conexion.query(`
        SELECT * FROM goleadores
    `,function(err,result,fields){
        if(err) throw err;
        
        var datos = JSON.stringify(result);
        
        archivos.writeFile("goleadores.json",datos,function(err){
        if(err) throw err;
        console.log("Misión cumplida");
})
        
    })
})