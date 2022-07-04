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

// var http = require('http');
// require('dotenv').config();
// var puerto=process.env.PUERTO || 8081
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(puerto);

// console.log('Server running at '+ puerto);


//const child_process=require("child_process");

// child_process.exec('node http.js',function(err,stdout,stderr){
//   if(!err){
//     console.log("stdout" + stdout);
//   }else{
//     console.log("error");
//   }
// });

// child_process.exec('ls -lh', (error, stdout, stderr) => {
//   if (!error) {
//     console.log("salida:\n" + stdout);
//   }
// });


//const child_process=require("child_process");
//console.log(process.argv.slice(2));
// const child_process=require("child_process");
// child_process.exec('node fs.js',function(err,stdout,stderr){
//     if(!err){
//       console.log("stdout" + stdout);
//     }else{
//       console.log("error");
//     }
//   });


//console.log(process.argv);

// var yargs=require('yargs');
// console.log(yargs.argv);
// var parametrosYargs=  yargs.argv
// //sin yargs
// var parametros=process.argv.slice(2);
// console.log(parametros);
// //con yargs
// // parametrosYargs= yargs(process.argv.slice(2)).argv;
// //console.log(parametrosYargs);



// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(parametrosYargs.port);

// console.log('Server running at ' + parametrosYargs.port);


// require('yargs')
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, function (argv) {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv

//yargs.help();

// var yargs=require('yargs');
// var chalk=require('chalk');

// yargs.command({
//   command:'login',
//   describe:'acceder mediante usaurio y contraseña',

//   builder:{
//       usuario:{
//         describe:'nombre del usuario',
//         demandOption:true,
//         default:'Ingrese su usuario',
//         type:'String'
//       },
//       password:{
//         describe:'contraseña',
//         demandOption:true,
//         default:'ingrese su contraseña',
//         type:'string'
//       }
//   },

//   handler:function(argv){
//       console.log(argv); //sólo muestra los parámetros
//       validarLogin(argv.usuario,argv.password);
//   }
// });

// function validarLogin(user,pass) {  
//   if(user=='denis' && pass=='12345'){
//     console.log(chalk.green.inverse('usuario logueado con éxito'));
//   }else{
//     console.log(chalk.red.inverse('error al ingresar usuario o contraseña'));
//   }
// }

// yargs.parse();

// AXIOS

//var axios=require('axios');

// async function obtenerPikachu(){
//   let respuesta=await axios.get("https://pokeapi.co/api/v2/pokemon/25");  
//   let datos=respuesta.data;
//   console.log(datos.name);

// }

//  obtenerPikachu();

// const fetch=require('node-fetch');
// async function obtenerPikachu(){
//   let respuesta= await fetch('https://pokeapi.co/api/v2/pokemon/25',{
//     method:'GET'
//   });
//   let datos= await respuesta.json();

//   console.log(datos.name);
// }
// obtenerPikachu();
//var axios=require('axios');
// axios({
//   method: 'get',
//   url: 'https://pokeapi.co/api/v2/pokemon/25',
//   responseType: 'json'
// })
//   .then(function (response) {
//     console.log(response.data.name);
//   });

// var axios=require('axios').default;

// let usuario = {
//   name:'denis',
//   email:'pachinx@gmail.com'
// }

// async function crearUsuario(){
//   let respuesta=await axios.post('https://reqres.in/api/users',usuario);
//   console.log("código:" + respuesta.status);
//   console.log("estado:" + respuesta.statusText);
//   if(respuesta.status==201){
//     console.log("datos:");
//     console.log(respuesta.data);
//   }else{
//     console.log("error al buscar datos");
//   }
  
// }

// //crearUsuario();
// async function coneccionFalsa(){
//   try{
//     let respuesta= await axios.get('https://direccionfalsa.com/password');
//   console.log(respuesta.status);
//   console.log(respuesta.data); 
//   }catch(err){
//     console.log(err.message);
//   }finally{
//     console.log("fin");
//   }
// }
//  coneccionFalsa();


// var jimp=require('jimp');

// async function modificarImagen(){
//  let imagen= await jimp.read("https://i.pinimg.com/originals/81/3e/56/813e5649cbdcf60531effccae407397f.jpg");
//  imagen.greyscale().getBuffer(jimp.MIME_JPEG,function(err,buffer){
//   if(err){
//     console.log(err.message);
//   }else{
//     imagen.writeAsync("imagen.jpg");
//   }
//  })
 
// }

// modificarImagen();

// var http = require('http');
// var fs=require('fs');
// http.createServer(function (request, response) {  
//   fs.readFile('imagen.jpg',function(err,data){
//     if(err){
//       response.writeHead(404, {'Content-Type': 'text/plain'});
//       response.write("error");
//       response.end();
//     }else{
//       response.writeHead(404, {'Content-Type': 'image/jpg'});
//       response.write(data);
//       response.end();
//     }
//   })

// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');



// // jimp.read("https://i.pinimg.com/originals/81/3e/56/813e5649cbdcf60531effccae407397f.jpg")
// //   .then(image => {
// //     image.greyscale().getBuffer(jimp.MIME_JPEG, onBuffer);
// //     image.writeAsync('imagen.jpg');
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });

// // function onBuffer(err, buffer) {
// //   if (err) throw err;
// //   console.log(buffer);
// // }



//const { response } = require('express');
var express=require('express');
const app=express();
const puerto=8081

// app.get('/',(req,resp)=>{
//   resp.send("Hola!")
// });
// app.listen(puerto,function(){
//   console.log("escuchando en el puerto "+ puerto);
// })

// app.get('/autor/:idautor/libro/:idlibro',function(req,res){
//   res.send(req.params);
// })
// app.listen(8081,function(){
//   console.log("escuchando en el puerto 8081");
// })

// app.route('/libro')
//   .get((req, res) => {
//     res.send('libro enviado')
//   })
//   .post((req, res) => {
//     res.send('libro agregado')
//   })
//   .put((req, res) => {
//     res.send('libro actualizado')
//   })
//   app.listen(8081,function(){
//      console.log("escuchando en el puerto 8081");
//    })
// app.use(express.static('public'));

// app.get("/",function(req,res){
//   res.send('<img src=img/foto.jpg />');  
// })
// app.listen(8081);
// app.use(express.json());
// app.post("/",function(req,res){
//   console.log(req.body);
//   res.send("OK");
// })

// app.get("/",function(req,res){
//   res.send("GET");
// })
// app.listen(8081);


app.use(express.static('public'));


var revision = function(req,res,next){
  let num1=req.query.numero1;
  let num2=req.query.numero2;
  console.log("middleware");
  console.log(num1,"-",num2);
if(!Number(num1) || !Number(num2)){
  res.send("Error en los datos!");
}else{
  next();
}

}
app.use('/html/calcular',revision);
app.get('/html/calcular',function(req,res){
  //console.log(req.query);
  let num1=req.query.numero1;
  let num2=req.query.numero2;
  res.send("resultado:" + Number(num1)*Number(num2));
})
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/html/calcular',function(req,res){
  console.log(req.query);
  console.log(req.body);
  let num1=req.body.numero1;
  let num2=req.body.numero2;
  res.send("resultado:" + Number(num1)*Number(num2));
})

var fs = require('fs');
const moment = require('moment');
app.get('/html/moment',function(req,res){
  
  var texto= fs.readFileSync('public/html/moment.html');
  moment.locale('es');
  texto=texto.toString().replace("Fecha:","Fecha:"+ moment().format("dddd D MMMM  YYYY"))
  texto=texto.toString().replace("Hora:","Hora:"+ moment().format("h:mm:ss a"))
  res.send(texto);  
})


var funcionLog= function(req,res,next){
  console.log("solicitud recibida:" + moment().toDate());
  console.log("método:" + req.method);
  console.log("url:"+req.url);
  next();
}
app.use("/middle",funcionLog);
app.get('/middle',function(req,res){
 
  res.send("OK");
})




app.listen(8081);