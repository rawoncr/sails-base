'use strict'

const fs = require('fs-extra')
const path = require('path')
const pwd = __dirname
const _ = require('lodash');

const conflicts = [
  //[newFile,oldFile],
  // ['/socket-io.index.js', '../node_modules/sails/node_modules/sails-hook-sockets/node_modules/socket.io/lib/index.js'],
  ['/deepCursor.js', '../node_modules/waterline/lib/waterline/query/deepCursor.js'],
  ['/on-connect.js', '../node_modules/sails/node_modules/sails-hook-sockets/lib/on-connect.js'],
]
conflicts.forEach(conflict => {
  fs.copySync(path.join(pwd, conflict[0]), path.join(pwd, conflict[1]))
});
