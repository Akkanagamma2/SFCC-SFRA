"use strict";

var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers');

function emailTrigger(record){
    var emailObj ={};
    emailObj.to = record.custom.Email;
    emailObj.from = "akkupatil1917@gmail.com";
    emailObj.subject = "Thank you for subscribing for email Alerts"

    var template = "assignment/ass22_email";

    var context = {};
    context.Fname = record.custom.firstName;
    context.Lname = record.custom.lastName;
    // context.category = record.custom.category;

    emailHelper.send(emailObj, template, context);
}

module.exports.emailTrigger = emailTrigger;
