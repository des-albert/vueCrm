const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let quoteState = new Schema({
  Name: {
    type: String
  }
},
{
  collection: 'quoteState'
});

module.exports = mongoose.model('quoteState', quoteState);
