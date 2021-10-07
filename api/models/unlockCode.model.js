const mongoose = require('mongoose');

const { Schema } = mongoose;

const UnlockCode = new Schema({
  _id: {
    type: String,
  },
  uniqueIdentifier: {
    type: String,
  },
  watchFace: {
    type: String,
  },
  payerEmail: {
    type: String,
  },
  price: {
    type: Number,
  },
  date: {
    type: Number,
  },
}, {
  collection: 'unlock-codes',
});

module.exports = mongoose.model('UnlockCode', UnlockCode);
