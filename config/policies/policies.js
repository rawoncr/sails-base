'use strict'

const _ = require('lodash')
module.exports.policies = _.omit(require('require-all')(__dirname), 'policies')
