'use strict';

function accessibleCustomer(req,res,next){

    if(customer.authenticated){
        var group = customer.isMemberOfCustomerGroup("VIP-Akkanagamma");
        if(group){
            res.redirect('Home-Show');
        }else{
            res.render("assignment/ass15");
        }
    }else{
        next(new Error("The page you are looking for doesn’t exist"));
    }
    next();
}
module.exports.accessible = accessibleCustomer;

