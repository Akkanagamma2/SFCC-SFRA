'use strict';

function getProductIDs(ID){
    var sitePref = dw.system.Site.getCurrent().getPreferences();
    var mySitePrefValue = sitePref.getCustom()["Patil_ProductIDs_Set"];
    return mySitePrefValue;
}

var productMgr = require('dw/catalog/ProductMgr');
var ArrayList = require('dw/util/ArrayList');
var list = new ArrayList();
var ntlist = new ArrayList();

var getProductList = function(prodObj){
    for(var i in prodObj){
        var productdetail = productMgr.getProduct(prodObj[i]);
        if(productdetail!=null){
            list.add(productdetail);
        }else{
            ntlist.add(prodObj[i]);
        }
    }
    return list;
}

module.exports={
    getProductIDs:getProductIDs,
    getProductList:getProductList,
    notproduct:ntlist
}

