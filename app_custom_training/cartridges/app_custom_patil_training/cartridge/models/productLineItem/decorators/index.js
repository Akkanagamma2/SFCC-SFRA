"use strict";

var base = module.superModule;

base.backIndex = require('*/cartridge/models/productLineItem/decorators/frontIndex');
base.frontIndex = require('*/cartridge/models/productLineItem/decorators/backIndex');
base.containsPersonalisation = require('*/cartridge/models/productLineItem/decorators/containsPersonalisation');


module.exports = base;


