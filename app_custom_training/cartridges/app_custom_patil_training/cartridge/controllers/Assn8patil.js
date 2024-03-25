'use strict';

var server = require('server');

server.get('Product',function(req,res,next){
    var sitePref = dw.system.Site.getCurrent().getPreferences();
    var mySitePrefValue = sitePref.getCustom()["Product_ID_patil"];

    var productMgr = require('dw/catalog/ProductMgr');

    var list = require('dw/util/ArrayList');
    var lst = new list();
    var ntlist = new list();
    var product = productMgr.getProduct(mySitePrefValue);
    if(product!=null){
        lst.add(product);
    }else{
        ntlist.add(mySitePrefValue);
    }
    res.render('assignment/ass08',{
        ProductList:lst,
        NullProd:ntlist
    });
    next();
});
module.exports = server.exports();