"use strict";

var server = require('server');

server.get('Show',function(req,res,next){

    var Service = require('dw/svc/Service');
    var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

    var myRestApi = LocalServiceRegistry.createService("app_custom_patil_training.http.employees.get",{
        createRequest: function(svc, pid) {
            svc = svc.setRequestMethod("POST");
            var url = svc.getURL();
            // svc = svc.addParam("pid",pid);
            var body = {
                pid : pid
            };
            return JSON.stringify(body);
        },
        parseResponse : function(svc, response) {
            return response.getText();
        },
        /*mockFull(service,args){
            var response = {
                "MOCK FULL" : true,
                PID : "Test pid",
                Name : "Test Product Name",
                Brand : "Test Product Brand"
            }
            return{
                getText:function(){
                    return JSON.stringify(response);
                }
            };
        },*/
        // mockCall(service,resultObj){
        //     var response = {
        //         "MOCK CALL" : true,
        //         PID : "Test pid",
        //         Name : "Test Product Name",
        //         Brand : "Test Product Brand"
        //     };
        //     return{
        //         statuscode : 200,
        //         statusMessage : "success",
        //         getText:function(){
        //             return JSON.stringify(response)
        //         }
        //     };
        // }
    });
    var pid = req.querystring.pid;
    var result = myRestApi.call(pid);

    if(result.isOk()){
        var httpClient = result.object;
        var ApiResponse = httpClient.getText();
        var ApiResponseJson = JSON.parse(ApiResponse);
        res.json(ApiResponseJson);
    }else{
        res.json({
            status : result.getStatus(),
            Error : result.getUnavailableReason()
        })
    }

    next();
});

module.exports = server.exports();