'use strict';

var server = require('server');


server.get('Cookie',function(req,res,next){

    var Cookie = request.httpCookies["cookies"].value;
    // var Value = Cookie.value;
    var prodCookies = Cookie.split(',');

    var list = require('dw/util/ArrayList');
    var prodList = new list();
    var noProdList = new list();

    var productMgr = require('dw/catalog/ProductMgr');

    for(let i=0;i<prodCookies.length;i++){
        var product = productMgr.getProduct(prodCookies[i]);
        if(product!=null){
            prodList.add(product);
        }else{
            noProdList.add(prodCookies[i]);
        }
    }

    res.render('cookies/prodCookie',{
        List:prodList,
        Notlist:noProdList
    });
    next();
});


module.exports = server.exports();