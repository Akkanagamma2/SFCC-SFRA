'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    res.render('display/emailSubscribeForm');
    next();
});

server.get('Confirm',function(req,res,next){
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var record = CustomObjectMgr.getCustomObject("email_det",req.querystring.email);
    Transaction.wrap(function(){
        if(!record){
            record = CustomObjectMgr.createCustomObject("email_det",req.querystring.email);
        }
        record.custom.firstName = req.querystring.fname;
        record.custom.lastName = req.querystring.lname;
        record.custom.Gender = req.querystring.gender;
        if(req.querystring.update === 'true'){
            record.custom.updates = true;

        }
    });
    res.render('display/confirmation');
    next();
});

module.exports = server.exports();