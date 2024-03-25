'use strict';

var server = require('server');

var URLUtils = require('dw/web/URLUtils');

server.get('Show',function(req,res,next){

    res.render('assignment/ass22',{
        action : URLUtils.url('Assn22patil-Send')
    })
    next();
});


server.post('Send',function(req,res,next){
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers');
    var ArrayList = require('dw/util/ArrayList');
    var categoryList = new ArrayList();

    var record = CustomObjectMgr.getCustomObject("emailSubscribe22_patil",req.form.email);
    Transaction.wrap(function(){
        if(!record){
            record = CustomObjectMgr.createCustomObject("emailSubscribe22_patil",req.form.email);
        }
        record.custom.firstName = req.form.firstname;
        record.custom.lastName = req.form.lastname;
        if(req.form.mens === 'true'){
            categoryList.add('mens');
        }
        if(req.form.womens === 'true'){
            categoryList.add('womens');
        }
        if(req.form.electronics === 'true'){
            categoryList.add('electronics');
        }
        record.custom.category = categoryList;
    });

    var emailObj ={};
    emailObj.to = record.custom.Email;
    emailObj.from = "akkupatil1917@gmail.com";
    emailObj.subject = "Thank you for subscribing for email Alerts"

    var template = "assignment/ass22_email";

    var context = {};
    context.Fname = record.custom.firstName;
    context.Lname = record.custom.lastName;
    context.category = record.custom.category;

    emailHelper.send(emailObj, template, context);

    res.render('assignment/ass22_2',{
        FName:record.custom.firstName,
        LName:record.custom.lastName,
        category:record.custom.category
    })
    next();
})
module.exports = server.exports();
