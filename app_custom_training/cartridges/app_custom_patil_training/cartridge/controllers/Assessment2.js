'use strict';

var server = require('server');

server.get('Start',function(){

    var ISML = require('dw/template/ISML');

    ISML.renderTemplate('display/method2',
    {
        Message1 : "ISML Render",
        Message2 : "using renderTemplate"
    })
});


module.exports = server.exports();