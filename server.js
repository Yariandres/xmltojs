const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'static')));

const xml = require('./routes/xml');
app.use('/api', xml);

app.listen(port, () => {
  `Express server running on port ${port}`
});
