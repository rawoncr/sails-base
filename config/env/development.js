/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {
  connections: {
    mongo: {
      adapter: 'sails-mongo',
      host: process.env.MONGO_PORT_27017_TCP_ADDR,
      port: process.env.MONGO_PORT_27017_TCP_PORT,
      database: "sails-dev"
    },
    test: {
      adapter: 'sails-mongo',
      host: process.env.MONGO_PORT_27017_TCP_ADDR,
      port: process.env.MONGO_PORT_27017_TCP_PORT,
      database: "sails-test"
    }
  },
  models: {
    connection: 'mongo',
    migrate: 'drop'
  },
  sockets: {
    adapter: 'memory'
  }
}
