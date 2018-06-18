'use strict';

var express = require('express');
var controller = require('./winners.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;