// var fs=require('fs');

// var nodemailer=require('nodemailer');


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'pachinx@gmail.com',
//       pass: ''
//     }
//   });

//   var mailOptions = {
//     from: 'testing@gmail.com',
//     to: 'pachinx@gmail.com',
//     subject: 'hola',
//     text: 'que tal',
//     attachments:{ 
//         filename: 'texto.txt',
//         path: 'nuevoArchivo.txt'
//      }
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email enviado: ' + info.response);
//     }
//   });

// fs.readFile("http.js",function(err,data){
//     console.log(data.toString());   
// });

// fs.writeFile('archivo.txt',"hola",function(err){
//     console.log(err);
// });

// fs.appendFile('archivo.txt',"chao",function(err){
//     console.log(err);
//     if (!err){
//         console.log("archivo modificado con éxito");
//     }    
// })

// fs.open('archivo.txt','r',function(err,file){
//     if(!err){
//         console.log("archivo abierto!")       
//     }
// })

// fs.unlink('archivo.txt',function(err){
//     if(!err){
//         console.log("archivo eliminado");
//     }
// })

// fs.rename('archivo.txt','nuevoArchivo.txt',function(err){
//     if(!err){
//         console.log("archivo renombrado!");
//     }
// })


// var http=require('http');
// var url=require("url");
// var fs=require("fs");

// var http = require('http');
// http.createServer(function (request, response) {
//   var q= url.parse(request.url,true);
//   //console.log(request.url);  
//   console.log(q.pathname);
//   //console.log(q.query);
//   if(q.pathname!="/"){
//     response.end();
//     return;
//   }

//   var datos=q.query;
//   var usuario={
//     rut:datos.rut,
//     nombre:datos.nombre,
//     apellido:datos.apellido
//   }
//   response.writeHead(200, {'Content-Type': 'application/json'});  
//   //console.table(datos);
//   fs.writeFile(datos.rut+".txt",JSON.stringify(usuario),function(err){
//     if(err){
//       console.log(err.message);
//     }else{
//       console.log("archivo creado");      
//     }
//   })
//   response.write(JSON.stringify(usuario))
//   response.end();
// }).listen(8091);

// console.log('Server running at http://127.0.0.1:8081/');

var http = require('http');
require('dotenv').config();
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(process.env.PUERTO);

console.log('Server running at '+process.env.PUERTO);

