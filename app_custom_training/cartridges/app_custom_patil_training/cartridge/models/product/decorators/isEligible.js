'use strict';

module.exports = function(object,product){
    Object.defineProperty(object,'isEligibleForPersonalization_P',{
        enumerable : true,
        value : product.custom.isEligibleForPersonalization_P
    })
}