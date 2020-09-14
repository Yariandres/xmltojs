
var express = require('express')
var router = express.Router();

const xml2js = require('xml2js');
const fs = require('fs');

router.get('/xml', (req, res) => {
  fs.readFile(process.cwd() + '/uploads/test.xml', 'utf8', function(err, data) {
    if (err) throw new Error(err);    
    
    /**
     * @param converts xml to json object
     */
    xml2js.parseString(data, (err, result) => {
      if (err) throw new Error(err);
      res.send(result);
    })
    
  });
});
module.exports = router;



