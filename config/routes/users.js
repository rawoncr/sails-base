module.exports = {
  defaultController: 'UserController',

  // Only For Debug
  '/*': function(req, res, next) {
    console.log('Requested', (req.isSocket) ? 'Socket' : '', ':: ', req.method, req.url)
    next();
  },
  'GET  /users': {
    action: 'find'
  }
}
