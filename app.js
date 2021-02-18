const express = require('express');
const app = express();
const port = 8080;
const hasMutation = require('./services/hasMutation');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// console.log(hasMutation(['AAAACC', 'AAAACC', 'AAAACC', 'AAAACC']));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.post('/mutation',
  body('dna').custom((dna) => {
    let invalidPattern = new RegExp(/[^ATCG]/i);
    let isArray = Array.isArray(dna);
    let fullStringDna = "";

    if (!isArray) {
      throw new Error('DNA data is not an array');
    }

    for (const row of dna) {
      fullStringDna = fullStringDna.concat(row);
    }

    if (invalidPattern.test(fullStringDna)){
      throw new Error('DNA characters are invalid'); 
    }

    return true;
  }),
  (req, res) => {
    try {
      validationResult(req).throw();
      let isMutated = hasMutation(req.body.dna);
      return res.status(200).json({success:true, message: `DNA mutation is ${isMutated}` });
    } catch (error) {
      return res.status(403).json(error);
    }
  });