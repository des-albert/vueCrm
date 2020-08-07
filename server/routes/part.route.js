const express = require('express');
const partRoutes = express.Router();

let Part = require('../models/part');

partRoutes.route('/').get((req, res) => {
  Part.find( (err, parts) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(parts);
    }
  });
});

module.exports = partRoutes;
