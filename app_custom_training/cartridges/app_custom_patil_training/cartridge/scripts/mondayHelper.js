'use strict';

// function getProductObjectById(ID) {
//     var productMgr = require('dw/catalog/ProductMgr');
//     var product = productMgr.getProduct(ID);

//     return product.ID;
// }

// function getProductObjectByName(ID) {
//     var productMgr = require('dw/catalog/ProductMgr');
//     var product = productMgr.getProduct(ID);

//     return product.name;
// }

// function getProductObjectByBrand(ID) {
//     var productMgr = require('dw/catalog/ProductMgr');
//     var product = productMgr.getProduct(ID);

//     return product.brand;
// }

// function getProductObjectByColor(ID) {
//     var productMgr = require('dw/catalog/ProductMgr');
//     var product = productMgr.getProduct(ID);

//     return product.custom.color;
// }

// module.exports={
//     getProductObjectId:getProductObjectById,
//     getProductObjectName:getProductObjectByName,
//     getProductObjectBrand:getProductObjectByBrand,
//     getProductObjectColor:getProductObjectByColor
// };

var productMgr = require('dw/catalog/ProductMgr');
var product = {
    Id:function(ID){
        var product = productMgr.getProduct(ID);
        return product.getID();
    },
    Name:function(ID){
        var product = productMgr.getProduct(ID);
        return product.getName();
    },
    Brand:function(ID){
        var product = productMgr.getProduct(ID);
        return product.getBrand();
    }
};

module.exports = {
    object:product
};