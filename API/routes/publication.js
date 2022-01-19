'use strict'
var express=require('express');
//carga el controlador de publication
var PublicationController=require('../controller/productos');

//cargar el router de express

var api=express.Router();
api.get('/probando',PublicationController.probando);
api.post('/publication',PublicationController.savePublication);
api.get('/publications/:page?',PublicationController.getPublicationex);





 module.exports=api;
