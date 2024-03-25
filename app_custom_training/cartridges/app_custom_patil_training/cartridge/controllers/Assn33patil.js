'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var ProductMgr = require('dw/catalog/ProductMgr');

    var attr = CustomObjectMgr.getAllCustomObjects('validate33_patil');
    while(attr.hasNext()){
        var productObj = attr.next();
        var product = ProductMgr.getProduct(productObj.custom.productId);
        if(product.availabilityModel.availability >= productObj.custom.allocation){
            var productValid = true;
        }else{
            productValid = false;
        }
    }
    res.json({
        ValidProduct : productValid,
        pid : product.ID
    })
    next();
})

module.exports = server.exports();