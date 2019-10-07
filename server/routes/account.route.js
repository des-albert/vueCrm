const express = require('express');
const accountRoutes = express.Router();

let Account = require('../models/account');

accountRoutes.route('/create').post( (req, res) => {
  let account = new Account(req.body);
  account.save()
    .then( () => {
      res.status(200).json( {'account': 'Account created successfully'} );
    })
    .catch( () => {
      res.status(400).send('unable to save to database');
    });
});

accountRoutes.route('/').get((req, res) => {
  Account.find( (err, accounts) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(accounts);
    }
  });
});
accountRoutes.route('/edit/:id').get((req, res) => {
  Account.findById(req.params.id, (err, account) => {
    if(err){
      res.json(err);
    }
    else {
      res.json(account);
    }
  });
});
accountRoutes.route('/delete/:id').delete( (req, res) => {
  Account.findOneAndDelete( {_id: req.params.id}, (err) => {
    if (err)
      res.status(400).json(err);
    else
      res.status(200).send('Delete Success');
  });
});

module.exports = accountRoutes;
