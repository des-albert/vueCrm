const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Part = new Schema({
  Code: {
    type: String
  },
  Description: {
    type: String
  },
  Cost: {
    type: Number
  },
  Price: {
    type: Number
  }
},
{
  collection: 'part'
});

module.exports = mongoose.model('Part', Part);
