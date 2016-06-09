'use strict'

let request = require('supertest-as-promised')

let assert = require('assert')

var client = require('../../../conflicts/sails.io.js')

var io = new client(require('socket.io-client'))
io.sails.autoConnect = false

describe('connectSocket', () => {

  it('should return 200', function(done) {

    io.sails.url = 'http://localhost:1337/?__sails_io_sdk_version=0.13.7'
    // console.log('io',io.sails);

    var socket = io.sails.connect();
    // console.log(socket);

    socket.get('/users', function(data, jwr) {
      // console.log(jwr.statusCode);
      // console.log(jwr);
      assert.equal(jwr.statusCode, 200, 'Expected 200 status code but got ' + jwr.statusCode)
      done()

    })

  })

})
