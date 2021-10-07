const express = require('express');

// Import middlewares
const auth = require('../middleware/auth');
const { admin } = require('../middleware/roles');

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
routes.get('/', [auth, admin], (req, res) => {
  UnlockCode.find().sort({ date: -1 }).exec((err, codes) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(codes);
    }
  });
});

// Update an unlockCode with id
routes.put('/:id', [auth, admin], (req, res) => {
  const { id } = req.params;
  const update = req.body;
  UnlockCode.updateOne({ _id: id }, {
    $set: update,
  })
    .then(() => {
      res.status(200).json({
        ok: true,
        message: 'unlockCode updated successfiully',
      });
    })
    .catch(() => {
      res.status(400).json({
        ok: false,
        message: 'unable to update unlockCode',
      });
    });
});

// Delete unlockCode with id
routes.delete('/:id', [auth, admin], (req, res) => {
  const { id } = req.params;
  UnlockCode.deleteOne({ _id: id })
    .then(() => {
      res.status(200).json({ business: 'removed successfully' });
    })
    .catch(() => {
      res.status(400).send('Unable to remove');
    });
});

// Activate watchface
routes.post('/activate', (req, res) => {
  const { unlockCode, uniqueId, watchFace } = req.body;
  UnlockCode.findOne({
    _id: unlockCode,
    watchFace,
  }, (err, unlockCodeObj) => {
    if (unlockCode == null || uniqueId == null || watchFace == null) {
      res.status(400).json({
        ok: false,
        message: 'bad request',
      });
    } else if (err) res.status(400).json(err);
    else if (unlockCodeObj == null) {
      res.status(400).json({
        ok: false,
        message: 'unlockCode not found in DB',
      });
    } else if (unlockCodeObj.uniqueIdentifier == null) {
      UnlockCode.updateOne({ _id: unlockCodeObj._id }, {
        $set: { uniqueIdentifier: uniqueId },
      })
        .then(() => {
          res.status(200).json({
            ok: true,
            message: 'UniqueId inserted',
          });
        })
        .catch(() => {
          res.status(400).json({
            ok: false,
            message: 'Unable to update uniqueId',
          });
        });
    } else if (unlockCodeObj.uniqueIdentifier == uniqueId) {
      res.status(200).json({
        ok: true,
        message: 'uniqueId match',
      });
    } else {
      res.status(400).json({
        ok: false,
        message: 'Unlockcode invalid',
      });
    }
  });
});

module.exports = routes;
