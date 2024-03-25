'use strict';

var base = module.superModule;

base.frontText =  require('*/cartridge/models/product/decorators/frontText');
base.backText = require('*/cartridge/models/product/decorators/backText');
base.isEligible = require('*/cartridge/models/product/decorators/isEligible');

module.exports = base;
