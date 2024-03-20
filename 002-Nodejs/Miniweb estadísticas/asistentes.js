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
        INSERT INTO asistentes VALUES(
            NULL,
            'Álex Baena',
            9,
            'Villarreal'
        ),
        (
            NULL,
            'Savio',
            7,
            'Girona'
        ),
        (
            NULL,
            'Toni Kroos',
            7,
            'Real Madrid'
        ),
        (
            NULL,
            'Diego Rico',
            7,
            'Getafe'
        ),
        (
            NULL,
            'Yan Couto',
            7,
            'Girona'
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se han insertado los datos")
    })
})