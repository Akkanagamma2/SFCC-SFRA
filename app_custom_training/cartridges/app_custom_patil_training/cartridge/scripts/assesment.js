'use strict';

function productObj(product){
    this.productid = function(){
        return product.ID;
    };
}

module.exports = productObj;

// module.exports = function product(){
//     var ProductMgr = require('dw/catalog/ProductMgr');
//     var product = ProductMgr.getProduct("013742002607M");
//     var prodId = product.ID;
//     return prodId;
// }
