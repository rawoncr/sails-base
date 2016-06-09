require('require-all')({
  dirname: __dirname,
  resolve: (module) => _.isFunction(module) ? module() : module
})
