'use strict';

var FormElementValidationResult = require('dw/web/FormElementValidationResult');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');

module.exports.alreadyPresent = function(field){
    var mailPresent = CustomObjectMgr.getCustomObject("emailSubscribe26_patil",field.htmlValue);
    if(mailPresent){
        // return new FormElementValidationResult(false,"Already Email Exists!!");
        return new FormElementValidationResult(false);
    }
}