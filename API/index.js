
//example();
'use strict'


var mongoose=require("mongoose");
//var expressFrame2=require('express');

var path=require('path');
//var expressFrame=require('express');
 
//var app=expressFrame();
var app=require('./app'); 
//var bodyParser=require('body-parser');




//---midleware: es un metodo que se ejecuta antes de llegar a un controlador






var port=process.env.PORT || 3000;
//aquiva la carpeta public 



//conexion mediante las promesas
mongoose.Promise=global.Promise;
//hacemos la conexion y le indicamos la url de mongodb
//mongoose.connect('mongodb://localhost:27017/curso_mean_social',{useNewUrlParser: true })
//USE .. se va a cponectar como cliente mongodb
//mongoose.connect('mongodb://localhost:27017/curso_mean_social',{useUnifiedTopology: true })
/*
mongoose.connect('mongodb+srv://bapulido:1234@cluster0.jcxq1.mongodb.net/curso_mean_social?retryWrites=true&w=majority',{useUnifiedTopology: true })
*/

mongoose.connect('mongodb://localhost:27017/practica',{useNewUrlParser: true})
//useMongoClient:true

//SI SE REALIZA LA CONEXION SE VA A LANZAR
.then(()=>{
	console.log("-- la conexion de la base de datos curso_mean_social se ha realizado con exito")
//crear servidor
app.listen(port,()=>{
	console.log("servidor corriendo localhost:"+port);
});


}).catch(err =>console.log(err));
//si no se puede , para eso estar el catch, que captura los errores






































