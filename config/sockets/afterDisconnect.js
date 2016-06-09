'use strict'

/**
 * @description Manage the after disconnect sockets events
 * @author Luis Hernandez
 */
module.exports.afterDisconnect = (session, socket, next) => {
  sails.log.debug('[-] afterDisconnect . . . .')
  return next()
}
