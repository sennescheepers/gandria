const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  qr: {
    type: String,
  },
}, {
  collection: 'products',
});

module.exports = mongoose.model('Product', Product);
