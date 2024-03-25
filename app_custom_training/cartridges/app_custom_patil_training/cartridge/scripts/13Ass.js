'use strict';

function getProductIds(){
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

var objList = new ArrayList();

    var Object = {
        getId : function(ID){
            var productdetail = productMgr.getProduct(ID);
            return productdetail.ID;
        },
        getName : function(ID){
            var productdetail = productMgr.getProduct(ID);
            return productdetail.name;
        },
        getBrand : function(ID){
            var productdetail = productMgr.getProduct(ID);
            return productdetail.brand;
        }
    }

module.exports = {
    getProductIds:getProductIds,
    Object:Object,
    getProductList:getProductList,
    ntlist : ntlist
}