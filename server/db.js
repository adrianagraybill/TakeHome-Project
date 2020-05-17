'use strict';

const Pool = require('pg').Pool;

const pool = new Pool({
  user: "adrianagraybill",
  password: "pg372015",
  host: "localhost",
  port: 5432,
  database: "allusers"
});

module.exports = pool;
