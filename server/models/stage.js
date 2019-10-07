const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Stage = new Schema({
  Name: {
    type: String
  }
},
{
  collection: 'stage'
});

module.exports = mongoose.model('Stage', Stage);
