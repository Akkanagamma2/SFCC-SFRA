'use strict';

var server = require('server');

var URLUtils = require('dw/web/URLUtils');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get('Show',csrfProtection.generateToken,function(req,res,next){
    var form = server.forms.getForm('Assn26');
    form.clear();
    res.render('assignment/assn26_1',{
        emailsubscribe : form,
        actionurl : URLUtils.url('Assn26patil-Submit')
    })
    next();
});

server.post('Submit',csrfProtection.validateAjaxRequest,function(req,res,next){
    var emailtrigger = require('../scripts/emailTrigger');
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var ArrayList = require('dw/util/ArrayList');
    var categoryList = new ArrayList();

    var subscribeForm = server.forms.getForm("Assn26");

    if(subscribeForm.valid){
        var record = CustomObjectMgr.getCustomObject("emailSubscribe26_patil",subscribeForm.email.value);
        Transaction.wrap(function(){
            if(!record){
                record = CustomObjectMgr.createCustomObject("emailSubscribe26_patil",subscribeForm.email.value);
            }
            record.custom.firstName = subscribeForm.firstname.value;
            record.custom.lastName = subscribeForm.lastname.value;
        });

        emailtrigger.emailTrigger(record);
        res.render('assignment/assn26_3');

    }else{
        res.render('assignment/assn26_2');
    }
    next();
});

module.exports = server.exports();