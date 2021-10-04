const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UnlockCode = new Schema({
    _id: {
        type: String
    },
    uniqueIdentifier: {
        type: String
    },
    watchFace: {
        type: String
    },
    payerEmail: {
        type: String
    }
}, {
    collection: 'unlock-codes'
});

module.exports = mongoose.model('UnlockCode', UnlockCode);