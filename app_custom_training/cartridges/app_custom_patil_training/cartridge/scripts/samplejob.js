'use strict';

function category(){
    var ProductMgr = require('dw/catalog/ProductMgr');

    // var products = ProductMgr.queryAllSiteProducts();
    // while(products.hasNext()){
    //     var product = products.next();
    //     var productId = product.ID;
    var product = ProductMgr.getProduct("25752218M");
        var category = categoryArray(product);
        var str="";
        for(var i in category){
            if(i==0){
                str = category[i];
            }else{
                str =  category[i]+" > "+ str;
            }
            product.custom.categoryPathP = str;
        }
    // }
}

var array = new Array();
function categoryArray(product){
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

module.exports.Category = category;