'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = Schema({
  name: { type: String, required: true},
  membershipstatus: { type: Boolean, required: true, default:true}
});

module.exports.model('catalog', catalogSchema);
