'use strict'
const _ = require('lodash')
let routes = {}

require('require-all')({
  dirname: __dirname,
  resolve: module => {
    const defaultController = module.defaultController
    if (defaultController) {
      module = _.omit(module, 'defaultController')
      _.forEach(module, route => {
        if (!route.controller) route.controller = defaultController
        return route
      })
    }
    return _.merge(routes, module)
  }
})

module.exports.routes = routes
