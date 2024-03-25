'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var read = require('../scripts/ass12');
    var productIdList = read.getProductIDs();
    var productDetail = read.getProductList(productIdList);

    res.render('helpModule/newmodule',{
        productDet:productDetail,
        NotProduct:read.notproduct
    });
    next();
});

module.exports = server.exports();