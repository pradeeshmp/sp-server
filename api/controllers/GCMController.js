/**
 * GCMKey provider
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
key: function key(req, res) {
  sails.log("Google Project Number: " + sails.config.push.gcm.projectNumber);
  res.json(sails.config.push.gcm.projectNumber);
}
};
