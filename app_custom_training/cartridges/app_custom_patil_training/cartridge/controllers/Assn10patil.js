'use strict';

var server = require('server');

server.get('Tag',function(req,res,next){

    var sitepref = dw.system.Site.getCurrent().getPreferences();
    var mySitePrefValue = sitepref.getCustom()["Patil_ProductIDs_Set"];

    var productMgr = require("dw/catalog/ProductMgr");

    var List = require('dw/util/ArrayList');
    var prodList = new List();
    var noProdList = new List();

    for(var i in mySitePrefValue){
        var product = productMgr.getProduct(mySitePrefValue[i]);
        if(product!=null){
            prodList.add(product);
        }else{
            noProdList.add(mySitePrefValue[i]);
        }
    }

    res.render('assignment/assn10',{
        List:prodList,
        Notlist:noProdList
    });
    next();
});
module.exports = server.exports();