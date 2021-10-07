const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// Import middlewares
const auth = require("../middleware/auth");
const { admin } = require("../middleware/roles");

const routes = express.Router();

const User = require('../models/user.model');

// Login
routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({
        email: email
    }, (err, user) => {
        if (err) res.status(400).json(err);
        else if (!user) {
            res.status(400).json({
                ok: false,
                message: 'Wrong combination',
            });
        } else {

            verify(password, user.password).then((valid) => {

                if (!valid) res.status(400).json({
                    ok: false,
                    message: 'Wrong combination',
                });
                else {
                    const token = jwt.sign({
                        id: user._id,
                        roles: user.roles,
                    }, "private-key", { expiresIn: "15m" });

                    res.status(200).send({
                        ok: true,
                        token: token
                    });
                }

            });

        }
    });
});

// Add user
routes.post('/', [auth, admin], (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => {
            res.status(200).json({ business: 'added successfully' });
        })
        .catch(() => {
            res.status(400).send('Unable to save to DB');
        });
});

// Remove user
routes.delete('/:id', [auth, admin], (req, res) => {
    const { id } = req.params;
    User.deleteOne({ _id: id })
        .then(() => {
            res.status(200).json({ business: 'removed successfully' });
        })
        .catch(() => {
            res.status(400).send('Unable to remove');
        });
});

// Get all users
routes.get('/', [auth, admin], (req, res) => {
    User.find((err, users) => {
        if (err) res.status(400).json(error);
        else res.status(200).json(users);
    });
})

async function verify(password, hash) {
    return new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":")
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key == derivedKey.toString('hex'))
        });
    })
}

module.exports = routes;