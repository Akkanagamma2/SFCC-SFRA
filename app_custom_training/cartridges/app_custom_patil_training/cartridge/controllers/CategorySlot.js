'use strict';

var server = require('server');

server.get('Show',function(req,res,next){
    res.render('rendering/category/patilCategory');
    next();
});
module.exports = server.exports();