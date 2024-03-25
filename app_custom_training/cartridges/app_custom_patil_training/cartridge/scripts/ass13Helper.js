'use strict';

var productMgr = require('dw/catalog/ProductMgr');
var ArrayList = require('dw/util/ArrayList');
var list = new ArrayList();
var ntlist = new ArrayList();

function getProductIds(){
    var site = require('dw/system/Site');
    var sitePref = site.getCurrent().getCustomPreferenceValue("Patil_ProductIDs_Set");
    return sitePref;
}

function getList(productIDs){
    for(var i in productIDs){
        var product = productMgr.getProduct(productIDs[i]);
        if(product!=null){
            list.add(product);
        }else{
            ntlist.add(productIDs[i]);
        }
    }
    return list;
}


function productObj(product){
    this.getID = function(){
        return product.ID;
    };
    this.getName = function(){
        return product.name;
    };
    this.getBrand = function(){
        return product.brand;
    };
}

module.exports = {
    getProductIds:getProductIds,
    getList:getList,
    productObj:productObj,
    ntlist : ntlist
}

