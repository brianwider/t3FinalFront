/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var request = require('request'); 

// Get list of things
exports.index = function(req, res) {
  request({
    uri: "http://localhost:9000/api/players/add",
    method: "POST",
    form: {
      name: req.query.name
    }
  }, function (error, response, body) {
    console.log(body);
    res.json(JSON.parse(body));
  });
};