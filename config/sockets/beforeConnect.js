'use strict'

/**
 * @description Manage the before connect sockets events and performs
 * the user authentication for connect the socket
 * @author Luis Hernandez
 */
module.exports.beforeConnect = (handshake, next) => {
  sails.log.debug('[+] beforeConnect . . . .')
  return next(null, true)
}
