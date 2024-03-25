"use strict";

var server = require('server');

server.get('Show',function(req,res,next){
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');


    var cust = Transaction.wrap(function(){
            var customObj = CustomObjectMgr.getCustomObject("customerInfo","23496");
            if(!customObj){
                var customObject = CustomObjectMgr.createCustomObject("customerInfo","23496");
                customObject.custom.firstName = "i95dev";
                customObject.custom.lastName = "cust";
                customObject.custom.phoneNumber=12345671;
            }

            return customObject;
        });

    res.json({
        FirstName : cust.custom.firstName,
        LirstName : cust.custom.lastName,
        PhoneNumber : cust.custom.phoneNumber
    });
    next();
});

module.exports = server.exports();
