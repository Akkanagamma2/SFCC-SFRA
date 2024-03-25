'use strict';

module.exports = function(object,apiProduct){
    Object.defineProperty(object,'backTextLength_P',{
        enumerable : true,
        value : apiProduct.custom.backTextLength_P ? apiProduct.custom.backTextLength_P : null
    });
}