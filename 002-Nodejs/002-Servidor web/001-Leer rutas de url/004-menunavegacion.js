var servidor = require('http');

servidor.createServer(function(req,res){
    fecha = new Date();
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hola mundo desde Node.js</h1>");
    res.write(`
              <ul>
                <li> <a href="/">Inicio</a></li>
                <li> <a href="/sobrenosotros">Sobre nosotros</a></li>
                <li> <a href="/contacto">Contacto</a></li>
              </ul>
                `);
    //Enrutador
    switch(req.url){
        case "/":
            res.end("Estás en la página principal");
            break;
        case "/sobrenosotros":
            res.end("Estás en la página sobre nosotros");
            break;
        case "/contacto":
            res.end("Estás en la página de contacto");
            break;
        default:
            res.end("Página no encontrada");

    }
    
    console.log("Alguien ha cargado la web");
}).listen(8080);