"use strict";

module.exports = {
    logo : function(){
        $(".logo-home").on("click",function(e){
            alert("This is from custom header.js");
        })
    }
}