'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get('Show',csrfProtection.generateToken,function(req,res,next){
    var URLUtils = require('dw/web/URLUtils');
    var subscribe = server.forms.getForm("loginRegister");
    subscribe.clear();
    res.render("assignment/assn23",{
        subscribe : subscribe,
        actionUrl : URLUtils.url("Assn23patil-Send")
    })
    next();
})


server.post('Send',csrfProtection.validateRequest,function(req,res,next){
    var emailtrigger = require('../scripts/emailTrigger');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers');
    var ArrayList = require('dw/util/ArrayList');
    var categoryList = new ArrayList();

    var subscribeForm = server.forms.getForm("loginRegister");

    if(subscribeForm.valid){
        var record = CustomObjectMgr.getCustomObject("emailSubscribe23_patil",subscribeForm.email.value);
        Transaction.wrap(function(){
            if(!record){
                record = CustomObjectMgr.createCustomObject("emailSubscribe23_patil",subscribeForm.email.value);
            }
            record.custom.firstName = subscribeForm.firstname.value;
            record.custom.lastName = subscribeForm.lastname.value;
            if(subscribeForm.cat.mens.selected === true){
                categoryList.add('mens');
            }
            if(subscribeForm.cat.womens.selected === true){
                categoryList.add('womens');
            }
            if(subscribeForm.cat.electronics.selected === true){
                categoryList.add('electronics');
            }
            record.custom.category = categoryList;
            record.custom.Country = subscribeForm.country.value;
        });

        emailtrigger.emailTrigger(record);

        res.render('assignment/ass22_2',{
            FName : record.custom.firstName,
            LName : record.custom.lastName
        });

    }else{
        res.render('assignment/assn23',{
            subscribe : subscribeForm
        });
    }
    next();
})
module.exports = server.exports();