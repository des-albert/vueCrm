const express = require('express');
const opportunityRoutes = express.Router();

let Opportunity = require('../models/opportunity');

opportunityRoutes.route('/create').post( (req, res) => {
  let opportunity = new Opportunity(req.body);
  opportunity.save()
    .then( () => {
      res.status(200).json( {'opportunity': 'Opportunity created successfully'} );
    })
    .catch( () => {
      res.status(400).send('unable to save to database');
    });
});

opportunityRoutes.route('/').get((req, res) => {
  Opportunity.find( (err, opportunities) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(opportunities);
    }
  });
});

opportunityRoutes.route('/edit/:id').get((req, res) => {
  Opportunity.findById(req.params.id, (err, opportunity) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(opportunity);
    }
  });
});

opportunityRoutes.route('/update/:id').post((req, res) => {
  Opportunity.findById(req.params.id, (err, opportunity) => {
    if(!opportunity){
      res.status(404).send('data not found');
    }
    else {
      opportunity.Name = req.body.Name;
      opportunity.Account = req.body.Account;
      opportunity.ShipDate = req.body.ShipDate;
      opportunity.Stage = req.body.Stage;
      opportunity.save()
        .then( () => {
          res.json('Update Complete');
        })
        .catch( () => {
          res.status(400).send('unable to update database');
        });
    }
  });
});

opportunityRoutes.route('/delete/:id').delete( (req, res) => {
  Opportunity.findOneAndDelete( {_id: req.params.id}, (err) => {
    if (err)
      res.status(400).json(err);
    else
      res.status(200).send('Delete Success');
  });
});

module.exports = opportunityRoutes;
