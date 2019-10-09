const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Quote = new Schema({
  Name: {
    type: String
  },
  Opportunity: {
    type: String
  },
  Status: {
    type: String
  }
},
{
  collection: 'quote'
});

module.exports = mongoose.model('Quote', Quote);
