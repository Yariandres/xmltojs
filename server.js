const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;

// Init middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

const xml = require('./routes/xml');
app.use('/api', xml);

app.use('/static', express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  `Express server running on port ${port}`
});
