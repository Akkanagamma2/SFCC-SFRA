'use strict';

function product(product){
    this.id = product.ID;
    this.name = product.name;
    this.myName = product.name + " This is my new name";
    this.getId = function(param1,param2){
        return this.ID + "*******" + param1 + "*******" + param2;
    }
}

module.exports = product;