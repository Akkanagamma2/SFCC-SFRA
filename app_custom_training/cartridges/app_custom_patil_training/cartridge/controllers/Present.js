'use strict';

var server = require('server');

var URLUtils = require('dw/web/URLUtils');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');


server.get('Show',csrfProtection.generateToken,function(req,res,next){

    var subscribedata = server.forms.getForm("validationFun");
    subscribedata.clear();

    if(customer.isAuthenticated()){
        subscribedata.copyFrom({
            email : customer.profile.email,
            firstname : customer.profile.getFirstName(),
            lastname : customer.profile.getLastName()
        })
    }

    res.render("display/presentation",{
        action:URLUtils.url("Present-Submit"),
        subscribe : subscribedata
    })
    next();
});

server.get('Submit',csrfProtection.validateRequest,function(req,res,next){
    var Transaction = require('dw/system/Transaction');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var subscribedata = server.forms.getForm("validationFun");
    var record = CustomObjectMgr.getCustomObject('emailSubscribe22_patil',subscribedata.email.value);
    Transaction.wrap(function(){
        if(!record){
            record = CustomObjectMgr.createCustomObject('emailSubscribe22_patil',subscribedata.email.value);
        }
        record.custom.firstName = subscribedata.firstname.value;
        record.custom.lastName = subscribedata.lastname.value;
    })

    //email Triggering
    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers');
    var emailObj ={};
    emailObj.to = record.custom.Email;
    emailObj.from = "akkupatil1917@gmail.com";
    emailObj.subject = "Thank you for subscribing for email Alerts"

    var template = "assignment/ass22_email";

    var context = {};
    context.Fname = record.custom.firstName;
    context.Lname = record.custom.lastName;
    //context.category = record.custom.category;

    emailHelper.send(emailObj, template, context);

    res.render('display/presentation2');

    next();
})

module.exports = server.exports();