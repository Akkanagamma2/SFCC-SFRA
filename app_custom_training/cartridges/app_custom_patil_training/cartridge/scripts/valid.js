"use strict";

var FormElementValidationResult = require('dw/web/FormElementValidationResult');

module.exports.submit  =  function(field){

    return new FormElementValidationResult(false,"This is not correct");
}