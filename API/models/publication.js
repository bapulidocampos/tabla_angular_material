'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var PublicationSchema=Schema({
nombre:String,
categoria:String,
sabor:String,
precio:String,
estado:String,


});
module.exports=mongoose.model('Publication',PublicationSchema);

