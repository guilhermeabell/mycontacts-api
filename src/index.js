/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(3000, () => console.log('Server running on port 3000'));
