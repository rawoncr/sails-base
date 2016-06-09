const _ = require('lodash')
require('./conflicts')()
require('./globals')


module.exports = (done, err, server) => {
  const promises = []
  const modules = require('require-all')({
    dirname: __dirname,
    filter: '^(?!index|conflicts|globals)',
    resolve: m => {
      // console.log('m =',m);
      if (_.isFunction(m)) {
            promises.push(m())
      }
    }
  })

  Promise.all(promises)
    .then(() => done(err, server))
    .catch(err => done(err))

}
