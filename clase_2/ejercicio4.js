//cargar modulos (librerias)
var http = require('http');
var url  = require('url');

//funcion que calcula el cuadrado de un número
function cuadrado(numero){
    return numero*numero;    
}

//a)solo con pathname
http.createServer(function (request, response) {
  let q=url.parse(request.url,true);
  let ruta=q.pathname;  
  let partes=ruta.split("/");
  console.log(ruta);
  console.table(partes);

  //revisamos cuantas partes tiene la ruta, si tiene mas de 3 o menos de 3 está mal.
  if(partes.length!=3){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("Recurso no encontrado. Probablemente la ruta este mal")
  }else if(partes[1]!='numero') {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("El recurso no se encontro")
  }else if(!Number(partes[2])){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write("no se pudo realizar el calculo");
  }else{//la ruta viene bien
    response.writeHead(200, {'Content-Type': 'text/plain'}); //OK
    response.write(cuadrado(partes[2]).toString());
  }  
  response.end();
}).listen(8081);

console.log('servidor iniciado');

//a)127.0.0.1:8081/numero/5
//b)127.0.0.1:8081/numero?valor=5
//c)127.0.0.1:8081?numero=5



