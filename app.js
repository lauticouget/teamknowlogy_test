const express = require('express');
const app = express();
const port = 8080;
const hasMutation = require('./services/hasMutation');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log(hasMutation(['AAAACC', 'AAAACC', 'AAAACC', 'AAAACC']));

// Validación bases nitrogenadas VALIDAS!
// SOLO VALORES  [A, T, C, G];