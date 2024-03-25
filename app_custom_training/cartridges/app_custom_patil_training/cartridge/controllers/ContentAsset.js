'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    var contentMgr = require('dw/content/ContentMgr');
    var content = contentMgr.getContent("patilAsset");

    //var contentDesc = content.getDescription();
    //var custAttr = content.custom.body;
    // var contentId = content.getID();

    res.render('contentAsset/content',{Content:content});
    next();
});
module.exports = server.exports();