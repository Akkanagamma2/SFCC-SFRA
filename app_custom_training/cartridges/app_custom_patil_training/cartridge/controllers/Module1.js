"use strict";

var server = require('server');

server.get("Show",function(req,res,next){

    var productdetail = require('*/cartridge/scripts/mod1');
    var productID = productdetail.ID("12345");
    var productName = productdetail.Name("12345");

    res.render('display/mod',{
        productID:productID,
        productName:productName
    })
    next();

});


server.get('File',function(req,res,next){
    var appCustom = require("app_custom_patil_training");
    
    res.render('display/mod',{
        message:appCustom.message()
    })
    next();
})
module.exports = server.exports();