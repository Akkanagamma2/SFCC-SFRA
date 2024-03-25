'use strict';

var server = require('server');
server.get('Product',function(req,res,next){

    var sitePref = dw.system.Site.getCurrent().getPreferences();
    var mySitePrefValue = sitePref.getCustom()["Patil_ProductIDs_Set"];

    var productMgr = require('dw/catalog/ProductMgr');

    // var list = require('dw/util/ArrayList');
    // var lst = new list();
    // var ntlst = new list();

    // for(let index=0;index<mySitePrefValue.length;index++){
    //     var product = productMgr.getProduct(mySitePrefValue[index]);
    //     if(product!=null){
    //         lst.add(product);
    //     }else{
    //         ntlst.add(mySitePrefValue[index]);
    //     }
    // }

    var arr = new Array();
    var ntarr = new Array();

    for(let i=0;i<mySitePrefValue.length;i++){
        var product = productMgr.getProduct(mySitePrefValue[i]);
        if(product!=null){
            arr.push(product);
        }else{
            ntarr.push(mySitePrefValue[i]);
        }
    }
    res.render('assignment/assn9',{
        ProductArr:arr,
        noProductArr:ntarr
    });
    next();
});
module.exports = server.exports();