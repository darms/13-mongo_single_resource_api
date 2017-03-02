'use strict';

const expect = require('chai').expect;
const request = require('superagent');
const Catalog = require('../model/list.js');
const PORT = process.env.PORT || 3000;

process.env.MONGODB_URI = 'mongodb://localhost/listappdev';

require('../server.js');

const url = `http://localhost:${PORT}`;
