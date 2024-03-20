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
        INSERT INTO goleadores VALUES(
            NULL,
            'Borja Mayoral',
            15,
            'Getafe'
        ),
        (
            NULL,
            'Álvaro Morata',
            14,
            'Atlético de Madrid'
        ),
        (
            NULL,
            'Artem Dovbyk',
            14,
            'Girona'
        ),
        (
            NULL,
            'Robert Lewandowski',
            12,
            'Barcelona'
        )
    `,function(err,result){
        if(err) throw err;
        console.log("Se han insertado los datos")
    })
})