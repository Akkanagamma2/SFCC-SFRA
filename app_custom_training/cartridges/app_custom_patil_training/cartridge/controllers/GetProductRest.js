'use strict';

var server = require('server');

server.post('Show',function(req,res,next){
    var ProductMgr = require('dw/catalog/ProductMgr');

    var productId = req.queryString.pid;
    if(productId){
        var product = ProductMgr.getProduct(productId);
        if(product){
            res.json({
                id : product.getID(),
                name : product.getName(),
                Brand : product.getBrand()
            });
        }else{
            res.json({
                Error : "No product with ID "+ productId
            });
        }
    }else{
        res.json({
            MainError : "Please provide id of product"
        })
    }

    next();
})
module.exports = server.exports();