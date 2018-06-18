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
exports.index = function (req, res) {
  request({
    uri: "http://localhost:9000/api/winners",
    method: "GET"
  }, function (error, response, body) {
    res.json(JSON.parse(body));
  });
};