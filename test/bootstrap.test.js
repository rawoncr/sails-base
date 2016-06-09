'use strict'

const sails = require('sails')
before(done => {
  sails.lift({
    log: {
      level: 'info'
    },
    models: {
      connection: 'test',
      migrate: 'drop'
    }
  }, (err, server) => {
    if (err) return done(err)
    require('./bootstrap')(done, err, server)
    // done(err, server)
  })

})

after(done => {
  sails.lower(done)
})

it('Bootstrap', done => {
  done()
})
