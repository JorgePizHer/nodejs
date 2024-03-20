var mysql = require('mysql')

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
        CREATE TABLE valencia 
        ( 
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(255),
            goles INT(11),
            asistencias INT(11),
            golesyasistencias INT(11)
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se ha cargado la tabla")
    })
})