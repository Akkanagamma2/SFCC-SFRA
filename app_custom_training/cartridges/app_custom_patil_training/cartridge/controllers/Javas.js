"use strict";

var server = require('server');

server.get('Script',function(req,res,next){
    var productHelp = require("*/cartridge/scripts/ProductHelper");
    var productMgr = require('dw/catalog/ProductMgr');
    var prod = productMgr.getProduct("kodak-c1013M");

    var productObj = new productHelp(prod);

    res.render('javaScr/script',{
            Id : productObj.Id,
            Name : productObj.name,
            Brand : productObj.brand
    });
    next();
});



module.exports = server.exports();