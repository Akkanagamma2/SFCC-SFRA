'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var emailHelpers = require('*/cartridge/scripts/helpers/emailHelpers');
    var emailObj ={};
    emailObj.to = "akkanagamma2@gmail.com";
    emailObj.from = "akkupatil1917@gmail.com";
    emailObj.subject = "Kuch tho Kam Karo bahi";

    var template = "display/emailbody";

    var context = {};
    context.FirstName = "Akku";
    context.LastName = "patil";

    emailHelpers.send(emailObj, template, context);

    res.json(
        {
            message:"Mail sent"
        }
    );

    next();
});


server.get('email',function(req,res,next){

    var Mail = require('dw/net/Mail');
    var Template = require('dw/util/Template');
    var HashMap = require('dw/util/HashMap');
    var template = new Template("display/emailbody.isml");


        var o = new HashMap();
        o.put("FirstName","Suraj");
        o.put("LastName","patil");
        o.put("Message","This is sent from akku")

        var content = template.render(o);

        var mail = new Mail();
        mail.addTo("akkupatil1917@gmail.com");
        mail.setFrom("akkanagamma2@gmail.com");
        mail.setSubject("Subject got the mail");
        mail.setContent(content);

        mail.send();//returns either Status.ERROR or Status.OK, mail might not be sent yet, when this method returns
        
        res.json();
    next();
});
module.exports = server.exports();



  