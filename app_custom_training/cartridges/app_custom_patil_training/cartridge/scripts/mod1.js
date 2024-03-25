"use strict";

function getID(ID) {
    var productMgr  = require('dw/catalog/ProductMgr');​
    var product = productMgr.getProduct(ID);​
    return product.ID;​
}

var getName = function(ID) {
    var productMgr = require('dw/catalog/ProductMgr');​
    var product = productMgr.getProduct(ID);​
    return product.name;​ 
}

// module.exports.ID = "12345";
// module.exports.Name = "prod1";


// module.exports.ID = getID;
// module.exports.Name = getName;


module.exports = {
    ID:getID,
    Name:getName
}

// module.exports.ID = function(ID){
//     var productMgr  = require('dw/catalog/ProductMgr');
//     var product = productMgr.getProduct(ID);
//     return product.ID;
// }