'use strict'

// Module dependencies
const path = require('path')
const _ = require('lodash')
const fs = require('fs')

let sockets = {}

fs.readdirSync(__dirname).forEach((file) => {
  let baseName = path.basename(file, path.extname(file))
  if (baseName != 'options') {
    sockets = _.merge(sockets, require("./" + file))
  } else {
    sockets = _.merge(sockets, require("./" + file)[baseName])
  }
})

module.exports.sockets = sockets
