'use strict';

module.exports = function(object,apiProduct){
    Object.defineProperty(object,'frontTextLength_P',{
        enumerable : true,
        value : apiProduct.custom.frontTextLength_P ? apiProduct.custom.frontTextLength_P : null
    })
}