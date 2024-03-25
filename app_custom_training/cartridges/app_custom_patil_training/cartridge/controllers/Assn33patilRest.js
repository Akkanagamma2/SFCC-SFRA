'use strict';

var server = require('server');

server.get('Show',function(req,res,next){

    var Service = require('dw/svc/Service');
    var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

    var restApi = LocalServiceRegistry.createService('app_custom_patil_training.http.validate.get',{
        createRequest : function(svc,pid){
            svc = svc.setRequestMethod("GET");
            var url = svc.getURL();
            svc = svc.setURL(url+"?pid="+pid);
            return '';
        },
        parseResponse : function(svc,rsponse){
            return response.getText();
        }

    })
    var pid = req.querystring.pid;
    var result = restApi.call(pid);

    var httpClient = result.object;
    var apiResponse = httpClient;
    var ApiResponse = JSON.parse(apiResponse);
    res.json(ApiResponse);
    next();
})
module.exports = server.exports();