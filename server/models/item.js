const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Item = new Schema({
  Code: {
    type: String
  },
  Description: {
    type: String
  },
  GroupCount: {
    type: Number
  },
  Quantity: {
    type: Number
  },
  ExtQuantity: {
    type: Number
  },
  Cost: {
    type: Number
  },
  Price: {
    type: Number
  },
  QuoteNumber: {
    type: Number
  },
  Group: {
    type: String
  }
},

{
  collection: 'item'
});

module.exports = mongoose.model('Item', Item);
