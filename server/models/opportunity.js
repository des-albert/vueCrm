const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Opportunity = new Schema({
  Name: {
    type: String
  },
  Account: {
    type: String
  },
  ShipDate: {
    type: Date
  },
  Stage: {
    type: String
  }
},

{
  collection: 'opportunity'
});

module.exports = mongoose.model('Opportunity', Opportunity);
