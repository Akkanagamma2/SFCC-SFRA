'use strict';

var server = require('server');

server.get('Cookie',function(req,res,next){

    var productMgr = require('dw/catalog/ProductMgr');

    var x = req.querystring.p1;
    var c = request.httpCookies[x];
    var product = productMgr.getProduct(c.getValue());
    if(product!=null){
        var pdetails = product;
    }else{
        pdetails = null;
        }

    res.render('ass11b/prodDetails',{
        Prodetails:pdetails
    });
    next();
});
module.exports = server.exports();