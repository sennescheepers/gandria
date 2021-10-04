const express = require('express');

const routes = express.Router();

const UnlockCode = require('../models/unlockCode.model');

// Add unlockCode
routes.route('/add').post((req, res) => {
  const unlockCode = new UnlockCode(req.body);
  unlockCode.save()
    .then(() => {
      res.status(200).json({ business: 'added successfully' });
    })
    .catch(() => {
      res.status(400).send('Unable to save to DB');
    });
});

// Get all unlockCodes
routes.route('/').get((req, res) => {
  UnlockCode.find((err, codes) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(codes);
    }
  });
});

module.exports = routes;
