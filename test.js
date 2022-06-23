var fs=require('fs');

var nodemailer=require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pachinx@gmail.com',
      pass: 'efujudftugmptnjf'
    }
  });

  var mailOptions = {
    from: 'testing@gmail.com',
    to: 'pachinx@gmail.com',
    subject: 'hola',
    text: 'que tal',
    attachments:{ 
        filename: 'texto.txt',
        path: 'nuevoArchivo.txt'
     }
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });

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
