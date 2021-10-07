const express = require('express');

// Import middlewares
const auth = require("../middleware/auth");
const { admin } = require("../middleware/roles");

const routes = express.Router();

const Product = require('../models/product.model');

// Get one product by id
routes.get('/:id', (req, res) => {
  const { id } = req.params;
  Product.findOne({
    _id: id,
  }, (err, product) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(product);
    }
  });
});

// Get all products
routes.get('/', (req, res) => {
  Product.find((err, products) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(products);
    }
  });
});

// Add product
routes.post('/', [auth, admin], (req, res) => {
  const product = new Product(req.body);
  product.save()
    .then(() => {
      res.status(200).json({ business: 'added successfully' });
    })
    .catch(() => {
      res.status(400).send('Unable to save to DB');
    });
});

routes.put('/:id', [auth, admin], (req, res) => {
  const query = { _id: req.params.id };
  Product.updateOne(query, { $set: req.body })
    .then(() => {
      res.status(200).json({ business: 'updated successfully' });
    })
    .catch(() => {
      res.status(400).send('Unable to update');
    });
});

module.exports = routes;
