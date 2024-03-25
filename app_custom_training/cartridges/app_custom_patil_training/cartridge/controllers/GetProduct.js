"use strict";

var server = require('server');

server.get('Show',function(req,res,next){
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(req.querystring.pid);

    res.json({
        Name:product.getName()
    })
    next();
});

module.exports = server.exports();