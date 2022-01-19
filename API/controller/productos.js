'use strict'
var path=require('path');
var fs=require('fs');
var moment=require('moment');
var mongoosePaginate=require('mongoose-pagination');
var Publication=require('../models/publication');


function probando (req,res){
	res.status(200).send({
		message:'hola desde el controlador publication'
	});
}


function savePublication(req,res){
	var params=req.body;

	if(!params.nombre) return res.status(200).send({message:'Debes enviar un texto'});
var publication=new Publication();

publication.nombre=params.nombre;
publication.categoria=params.categoria;
publication.sabor=params.sabor;
publication.precio=params.precio;
publication.estado=params.estado;
publication.save((err,publicationStored)=>{
	if(err)return res.status(500).send({message:'error al guarda la publicacion'});
	if(!publicationStored)return res.status(404).send({message:'la publicacion no se ha guardado'});
return res.status(200).send({
	publication:publicationStored
});

});


}




//////-----------------------------------------------



/////------------------------------------------------



function getPublicationex(req,res){
    console.log("por aqui estoy parcero");
var page=1;
if(req.params.page){
	page=req.params.page;
}
var itemsPerPag=4;

Publication.find({}).
paginate(page,itemsPerPag,(err,publicationess,total)=>{
if(err)return res.status(500).send({message:'error al devolver el seguimiento'});
return res.status(200).send({
	total_items:total,
	pages:Math.ceil(total/itemsPerPag),
	page:page,
	items_per_pag:itemsPerPag,
publicationess

});

});

}


////////////////////////getPublicationsexx en ruta ESTE VA PARA ENTRENADORES




module.exports={
	probando,
	savePublication,
	getPublicationex

}