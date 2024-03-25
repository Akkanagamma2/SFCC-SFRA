'use strict';

var server = require('server');

server.get('Patil',function(req,res,next){

    var productMgr = require('dw/catalog/ProductMgr');

    var product = productMgr.getProduct("25752218M");
    res.render('display/productId',{
        MyProduct : product
    });

    next();

});

module.exports = server.exports();