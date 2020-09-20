const express = require('express')
const router = express.Router();
const fs = require('fs');

const xml2js = require('xml2js');

router.get('/xml', (req, res) => {
  fs.readFile(process.cwd() + '/uploads/test.xml', 'utf8', function(err, data) {
    if (err) throw new Error(err);    
    
    /**
     * @param converts xml to json object
     */

    xml2js.parseString(data, (err, result) => {
      if (err) throw new Error(err);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send(result);
    });    
  });
});
module.exports = router;



