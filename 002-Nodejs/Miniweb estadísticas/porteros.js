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
        INSERT INTO porteros VALUES(
            NULL,
            'Unai Simón',
            1.0,
            'Athletic Club'
        ),
        (
            NULL,
            'Álex Remiro',
            1.0,
            'Real Sociedad'
        ),
        (
            NULL,
            'Orjan Nyland',
            1.0,
            'Sevilla'
        ),
        (
            NULL,
            'Rui Silva',
            1.1,
            'Real Betis'
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se han insertado los datos")
    })
})