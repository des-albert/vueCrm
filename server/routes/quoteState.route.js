const express = require('express');
const quoteStateRoutes = express.Router();

let quoteStates = require('../models/quoteState');

quoteStateRoutes.route('/').get((req, res) => {
  quoteStates.find( (err, quoteStates) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(quoteStates);
    }
  });
});

module.exports = quoteStateRoutes;
