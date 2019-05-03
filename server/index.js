const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
//const proxy = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 80;

app.use(cors());
// serve up static file
app.use(express.static('public'));
app.use('/*/styles.css', express.static('public/styles.css'));
app.use('/*', express.static('public'));


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

