'use strict';

function category(){
    var ProductMgr = require('dw/catalog/ProductMgr');

    var products = ProductMgr.queryAllSiteProducts();
    while(products.hasNext()){
        var product = products.next();
        if(product.primaryCategory){
            var category = categoryArray(product);
            for(var i in category){
                if(i==0){
                    var str="";
                    str = category[i];
                }else{
                    str =  category[i]+" > "+ str;
                }
            }
            product.custom.categoryPathP = str;
        }
    }
}


function categoryArray(product){
    var category = product.primaryCategory;
    var categoryArr = new Array();
    categoryArr.push(category.displayName);
    if(!category){
        category = product.variationModel.master.getPrimaryCategory();
        categoryArr.push(category.displayName);
    }
    while(!category.topLevel){
        category = category.getParent();
        categoryArr.push(category.displayName);
    }
    return categoryArr;
}

module.exports.Category = category;