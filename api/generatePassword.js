const crypto = require('crypto');
const { resolve } = require('path');

const password = ".";

async function hash(password) {
    return new Promise((resolve, reject) => {
        // Generating random 16 byte long salt
        const salt = crypto.randomBytes(16).toString('hex');

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ':' + derivedKey.toString('hex'));
        });
    });
}

hash(password)
    .then((key) => {
        console.log(key);
    })
    .catch((error) => {
        console.log(error);
    });