//INDEX.JS CONEXIONES Y LA CREACION DEL SERVIDOR
//APP.JS LLEVAR CARGAS DE FICHEROS , CONFIGURACIONES


'use strict'
//traemos a express y bodyparse
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var path=require('path');
//cargar rutas


var publication_routes=require('./routes/publication');



//---midleware: es un metodo que se ejecuta antes de llegar a un controlador
//permite crear un midleware, en cada peticion se ejecuta ese midleware
app.use(bodyParser.urlencoded({extended:false}));
//convierta lo que nos llega de body en json(convertir en un objeto json)
app.use(bodyParser.json());
//cors PARA ESCRIBIR TODAS LAS CABECERAS Y PERMITIR QUE LAS PETICIONES AJAX SE HAGAN CORRECTAS ENTRE ANGULAR Y BACKEND
// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});



//rutas
app.use('/api',publication_routes);


app.get("/pruebass",(req,res)=>{
	res.status(200).send({
		message:'accion de pruebas del servidor'
	});
});





module.exports=app;



