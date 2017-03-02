'use strict';

const Router = require('express').Router;
const jsonParser = require('body-parser').json();
const List = require('../model/catalog.js');

const catalogRouter = module.exports = new Router();

catalogRouter.post('/api/list', jsonParser, function(req, res, next) {
  req.body.timestamp = new Date();
  new List(req.body).save()
  .then(list => res.json(list))
  .catch(next);
});

catalogRouter.get('/api/list/:id', function(req, res, next) {
  Catalog.findById(req.params.id)
  .then( Catalog => res.json(list))
  .catch(next);
});
