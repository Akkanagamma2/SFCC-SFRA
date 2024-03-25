'use strict';

var array = new Array();
function category(product){
    var category = product.primaryCategory;
    array.push(category.displayName);
    if(!category){
        category = product.variationModel.master.getPrimaryCategory();
        array.push(category.displayName);
    }
    while(!category.topLevel){
        category = category.getParent();
        array.push(category.displayName);
    }
    return array;
}

module.exports.products = function(){
    var ProductMgr = require('dw/catalog/ProductMgr');

    var product = ProductMgr.getProduct("25772779M");
    var cat = category(product);
    return cat;
}