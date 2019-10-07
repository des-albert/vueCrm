const express = require('express');
const stageRoutes = express.Router();

let Stage = require('../models/stage');

stageRoutes.route('/').get((req, res) => {
  Stage.find( (err, stages) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(stages);
    }
  });
});

module.exports = stageRoutes;
