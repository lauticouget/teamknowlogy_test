const mysql = require('mysql');
const util = require('util');
require('dotenv').config();
console.log(process.env.HOST,
  process.env.USER,
  process.env.DATABASE
);
var mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE
});

mysqlConnection.connect();

var queryPromess = util.promisify(mysqlConnection.query).bind(mysqlConnection);

module.exports = { mysqlConnection, queryPromess };