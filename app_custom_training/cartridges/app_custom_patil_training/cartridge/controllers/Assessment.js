"use strict";

var server = require('server');

server.get('Show',function(req,res,next){

    var assess = require('../scripts/assesment');
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct("013742002607M");

    var newProductObj = new assess(product);

    res.json({
        productId : newProductObj.productid()
    })
    next();
});

// server.get('Show',function(req,res,next){

//     var assess = require('../scripts/assesment');
//     var ProductMgr = require('dw/catalog/ProductMgr');
//     var product = ProductMgr.getProduct("013742002607M");

//     var newProductObj = new assess.productObj(product);

//     res.json({
//         productId : newProductObj.productid()
//     })

//     next();
// });

module.exports = server.exports();