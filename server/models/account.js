const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Account = new Schema({
  Name: {
    type: String
  },
  Industry: {
    type: String
  }
},
{
  collection: 'account'
});

module.exports = mongoose.model('Account', Account);
