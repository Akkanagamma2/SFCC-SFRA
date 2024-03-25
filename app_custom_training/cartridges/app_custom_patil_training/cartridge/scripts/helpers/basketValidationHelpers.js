'use strict';

var base = module.superModule;

function validateRestService(){
    var Service = require('dw/svc/Service');
    var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

    var restApi = LocalServiceRegistry.createService('app_custom_patil_training.http.validate.get',{
        createRequest : function(svc,pid){
            svc = svc.setRequestMethod("GET");
            return '';
        },
        parseResponse : function(svc,rsponse){
            return response.getText();
        }

    })
    var result = restApi.call();

    var httpClient = result.object;
    var apiResponse = httpClient;
    var ApiResponse = JSON.parse(apiResponse);
    return ApiResponse;

}

base.validateRestService = validateRestService;

module.exports = base;
