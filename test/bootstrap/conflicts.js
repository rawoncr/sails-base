'use strict'
const fs = require('fs-extra')
const path = require('path')
const root = __dirname

module.exports = () => {

  const oldIndexOnConnect = path.join(root, '../../node_modules/sails/node_modules/sails-hook-sockets/lib/on-connect.js')
  const newIndexOnConnect = path.join(root, '../../conflicts/on-connect.js')
  fs.copySync(newIndexOnConnect, oldIndexOnConnect)

  const oldIndexDeepCursor = path.join(root, '../../node_modules/waterline/lib/waterline/query/deepCursor.js')
  const newIndexDeepCursor = path.join(root, '../../conflicts/deepCursor.js')
  fs.copySync(newIndexDeepCursor, oldIndexDeepCursor)

}
