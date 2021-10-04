const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    qr: {
        type: String
    }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);