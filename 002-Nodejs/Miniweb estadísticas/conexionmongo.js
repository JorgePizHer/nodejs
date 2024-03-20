var servidor = require('http');
var archivos = require('fs');
var mongoose = require('mongoose');

const conexion = 'mongodb://127.0.0.1/laligastats'

mongoose.connect(conexion).then(function(){
    console.log("Conectado a Mongo")
})

archivos.readFile('goleadoresmongo.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const datosjson = JSON.parse(data);
        console.log(datosjson);
  
        // Generate HTML content for Goleadores table
        let goleadoresHtml = '';
        datosjson.forEach(jugador => {
            goleadoresHtml += `
                <tr>
                    <td>${jugador.nombre}</td>
                    <td>${jugador.goles}</td>
                    <td>${jugador.equipo}</td>
                </tr>
            `;
        });
        
        // Read the HTML file and replace the placeholder with the generated HTML content
        archivos.readFile('inicio.html', 'utf8', (err, html) => {
            if (err) {
                console.error('Error al leer el archivo html:', err);
                return;
            }
            
        // Replace the placeholder with the generated HTML content for Goleadores table
        const nuevohtml = html.replace(/8888/g, goleadoresHtml);
            
        // Write the updated HTML content to a new file or send it as a response if using a server
            archivos.writeFile('goleadoresmongo.html', nuevohtml, err => {
                if (err) {
                    console.error('Error writing updated HTML file:', err);
                    return;
                }
                console.log('HTML file updated successfully');
            });
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
});

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //Enrutador
    switch(req.url){
        case "/":
                archivos.readFile('goleadoresmongo.html',function(err,data){
                res.write(data);
                res.end("");
                })
            break;
        case "/barcelona":
                archivos.readFile('barcelona.html',function(err,data){
                res.write(data);
                res.end("");
                })
            break;
        case "/getafe":
                archivos.readFile('getafe.html',function(err,data){
                res.write(data);
                res.end("");
                })
            break;
        case "/realmadrid":
                archivos.readFile('realmadrid.html',function(err,data){
                res.write(data);
                res.end("");
                })
            break;
        case "/valencia":
                archivos.readFile('valencia.html',function(err,data){
                res.write(data);
                res.end("");
                })
            break;
        default:
            res.end("Página no encontrada");

    }
       
}).listen(8081);