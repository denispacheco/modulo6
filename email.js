//contraseña del correo generada: 

//1.- cargamos el nodemailer
var nodemailer=require('nodemailer');

//2.1- configuracion del servidor
var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'pachinx@gmail.com',
        pass : 'poner aqui el password generado'
    }
});
//2.2.- construir el mensaje de correo
var mailOptions = {
    from : 'cursonode@platafaorma5.cl',
    to : 'alejandraruizpimentel@gmail.com',
    subject: 'danger!!! problema con tu cuenta de banco',
    text: "encontramos un problema en tu cuenta. envíame tu clave de acceso para solucionarlo"
};
//3.- enviar el correo
transporter.sendMail(mailOptions,function(err,info){
    if(err){
        console.log(err.message)
    }else{
        console.log(info.response);
    }
})
