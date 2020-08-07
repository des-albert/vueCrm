const express = require('express');
const itemRoutes = express.Router();

let Item = require('../models/item');

itemRoutes.route('/create').post( (req, res) => {
  let item = new Item(req.body);
  item.save()
    .then( () => {
      res.status(200).json( {'item': 'Item created successfully'} );
    })
    .catch( () => {
      res.status(400).send('unable to save to database');
    });
});
itemRoutes.route('/').get((req, res) => {
  Item.find( (err, items) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(items);
    }
  });
});

itemRoutes.route('/:QuoteNumber').get((req, res) => {
  let search_key = req.params.QuoteNumber;
  Item.find( {'QuoteNumber': search_key}, (err, items) => {
    if (err) {
      res.json(err);
    } else {
      res.json(items);
    }
  });
});

itemRoutes.route('/edit/:id').get((req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(item);
    }
  });
});


itemRoutes.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if(!item){
      res.status(404).send('data not found');
    }
    else {
      item.Group = req.body.Group;
      item.GroupCount = req.body.GroupCount ;
      item.Quantity = req.body.Quantity;
      item.ExtQuantity = item.GroupCount * item.Quantity;
      item.save()
        .then( () => {
          res.json('Update Complete');
        })
        .catch( () => {
          res.status(400).send('unable to update database');
        });
    }
  });
});
module.exports = itemRoutes;
