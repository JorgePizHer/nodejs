var servidor = require('http');
var ruta = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
   
    //Enrutador
    switch(req.url){
        case "/":
            res.write(`
                <form action="/procesa" method="POST">
                    <input type="text" name="Nombre">
                    <input type="submit">
                </form>
            `)
                
            break;
        case "/procesa":
            console.log("Voy a procesar el formulario")    
            break;
    }
    res.end("")
    
       
}).listen(8080);