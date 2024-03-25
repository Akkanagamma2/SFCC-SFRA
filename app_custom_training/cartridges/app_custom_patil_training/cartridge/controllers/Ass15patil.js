"use strict";

var server = require('server');

var customerGroup = require('*/cartridge/scripts/middleware/ass15middleware');

server.get('Show',customerGroup.accessible);
module.exports = server.exports();