'use strict'

/**
 * @description Manage the after connect sockets events
 * @author Ramon Caraballo
 */
module.exports.afterConnect = (socket) => {
  sails.log.debug('[+] Socket connected')
}
