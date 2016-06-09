const users = [{
  name: 'Carlos Marcano',
  email: 'cmarcano631@gmail.com',
}, {
  name: 'Luis Hernandez',
  email: 'luish000.lh@gmail.com',
}, {
  name: 'Ramon Caraballo',
  email: 'ramoncaraballor@gmail.com',
}]

export default () => {
  users.forEach(user => {
    var criteria = {
      email: user.email
    }
    User.findOrCreate(criteria, user)
      .then(user => {
        sails.log.info('User created', user)
      })
  })
}
