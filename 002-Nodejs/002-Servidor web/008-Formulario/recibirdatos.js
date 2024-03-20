var servidor = require('http');
var ruta = require('url');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
   
    //Enrutador
    switch(req.url){
        case "/":
            res.write(`
                <form action="/procesa" method="POST">
                    <input type="text" name="Nombre"><br>
                    <input type="text" name="Asunto"><br>
                    <input type="email" name="Email"><br>
                    <textarea name="Mensaje"></textarea><br>
                    <input type="submit">
                </form>
            `)
                
            break;
        case "/procesa":
            let datos = '';
            req.on('data',parte=>{
                datos += parte.toString();
            })
            req.on('end',()=>{
                console.log(datos)
            })
            
            break;
    }
    res.end("")
    
       
}).listen(8080);