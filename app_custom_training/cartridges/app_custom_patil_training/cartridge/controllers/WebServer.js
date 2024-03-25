"use strict";

var server = require('server');

server.get('Show',function(req,res,next){

    var HTTPClient = require('dw/net/HTTPClient');
    var httpclient = new HTTPClient();
    httpclient.open('GET','https://dummy.restapiexample.com/api/v1/employees');
    httpclient.send();
    var ApiResponse = httpclient.getText();
    var ApiResponseObject = JSON.parse(ApiResponse);
    res.json(ApiResponseObject);
    next();
});

module.exports = server.exports();