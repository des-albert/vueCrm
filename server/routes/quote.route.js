const express = require('express');
const quoteRoutes = express.Router();

let Quote = require('../models/quote');

quoteRoutes.route('/create').post( (req, res) => {
  let quote = new Quote(req.body);
  quote.save()
    .then( () => {
      res.status(200).json( {'quote': 'Opportunity created successfully'} );
    })
    .catch( () => {
      res.status(400).send('unable to save to database');
    });
});

quoteRoutes.route('/').get((req, res) => {
  Quote.find( (err, quotes) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(quotes);
    }
  });
});

quoteRoutes.route('/:Name').get((req, res) => {
  let search_key = req.params.Name;
  Quote.find( {'Opportunity': search_key}, (err, quotes) => {
    if (err) {
      res.json(err);
    } else {
      res.json(quotes);
    }
  });
});


quoteRoutes.route('/edit/:id').get((req, res) => {
  Quote.findById(req.params.id, (err, quote) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(quote);
    }
  });
});

quoteRoutes.route('/update/:id').post((req, res) => {
  Quote.findById(req.params.id, (err, quote) => {
    if(!quote){
      res.status(404).send('data not found');
    }
    else {
      quote.Name = req.body.Name;
      quote.Opportunity = req.body.Opportunity;
      quote.Status = req.body.Status;
      quote.save()
        .then( () => {
          res.json('Update Complete');
        })
        .catch( () => {
          res.status(400).send('unable to update database');
        });
    }
  });
});

quoteRoutes.route('/delete/:id').delete( (req, res) => {
  Quote.findOneAndDelete( {_id: req.params.id}, (err) => {
    if (err)
      res.status(400).json(err);
    else
      res.status(200).send('Delete Success');
  });
});

module.exports = quoteRoutes;
