const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    roles: {
        type: Array,
    }
}, {
    collection: 'users',
});

module.exports = mongoose.model('User', User);
