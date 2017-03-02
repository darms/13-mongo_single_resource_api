'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Promise = require('bluebird');
const debug = require('debug')('message:server');
const mongoose = require('mongoose');
const listRouter = require()'./route/list-route.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/listappdev';


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(cors());
app.use(morgan('dev'));
app.use(listRouter);

app.listen(PORT, () => {
  debug(`server up: ${PORT}`);
});
