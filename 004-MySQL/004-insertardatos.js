var mysql = require('mysql')
// npm install mysql

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"nodejs"
});

conexion.connect(function(err){
    if(err) throw err;
    console.log("Conectado")
    conexion.query(`
        INSERT INTO entradas VALUES(
            NULL,
            'Un título',
            'Un texto',
            '2024-02-15'
)
    `,function(err,result){
        if(err) throw err;
        console.log("Se han insertado los datos")
    })
})