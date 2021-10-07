// Imports
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const config = require('./DB');

const PORT = 4000;

// Import routes
const unlockCodeRoute = require('./routes/unlockCode.route');
const productRoute = require('./routes/product.route');
const userRoute = require('./routes/user.route');

// Setup database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected'); },
  (err) => { console.log(`Can not connect to the database${err}`); },
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup CORS rules
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
  next();
});

// Setup routes
app.use('/unlockCode', unlockCodeRoute);
app.use('/product', productRoute);
app.use('/user', userRoute);

// Start server
app.listen(PORT, () => {
  console.log('Server is running on Port:', PORT);
});
