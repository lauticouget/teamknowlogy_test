const express = require('express');
const app = express();
const port = 8080;
const hasMutation = require('./services/hasMutation');
const bodyParser = require('body-parser');
const { body, validationResult, Result } = require('express-validator');
const { mysqlConnection, queryPromess } = require('./mysqlConnection');
const { json } = require('body-parser');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Callback method
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

    if (invalidPattern.test(fullStringDna)) {
      throw new Error('DNA characters are invalid');
    }

    return true;
  }),
  async (req, res) => {
    try {
      validationResult(req).throw();
      let dna = req.body.dna;
      let dnaJSONString = JSON.stringify(dna);
      let isMutated = hasMutation(dna);
      mysqlConnection.query(
        `INSERT INTO adns (structure, has_mutation)
        VALUES ('${dnaJSONString}', ${isMutated});`,
        function (error, results, fields) {
          if (error) return res.status(403).json({ success: false, message: `${error.message}` });
          else return res.status(200).json({ success: true, message: `DNA mutation is ${isMutated ? true : false}` });
        });
    } catch (error) {
      return res.status(403).json(error);
    }
  });

// Async method
app.get('/stats', async function (req, res) {
  try {
    let result = await queryPromess(
      `SELECT SUM(has_mutation) as count_mutations, (count(*) - SUM(has_mutation)) as count_no_mutation, avg(has_mutation) as mutated_percentage
      FROM adns`);

    return res.status(200).json({ result })
  } catch (error) {
    return res.status(403).json({ success: false, message: `${error.message}` });
  }
})
