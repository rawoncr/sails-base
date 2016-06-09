/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   *
   * @description
   * @param req...
   */
  find(req, res) {
    User.find()
      .then(users => res.ok(users))
      .catch((err) => {
        sails.log.warn(err)
        return res.badRequest()
      })
  }
};
