const mysql = require('mysql');
const util = require('util');
require('dotenv').config();
console.log(  process.env.HOST,
   process.env.USER,
   process.env.DATABASE,
   process.env.DB_PORT);
var mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  port: process.env.DB_PORT
});

mysqlConnection.connect();

var queryPromess = util.promisify(mysqlConnection.query).bind(mysqlConnection);

module.exports = { mysqlConnection, queryPromess };