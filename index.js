const xml2js = require('xml2js');
const fs = require('fs');

fs.readFile(__dirname + '/uploads/test.xml', 'utf8', function(err, data) {
  if (err) throw new Error(err);
  console.log(typeof data);
  return xml = data;
});


