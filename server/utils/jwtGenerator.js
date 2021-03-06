'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(user_id) {
  const payload = {
    account: {
      id:user_id
    }
  };
  return jwt.sign(payload, process.env.secret, { expiresIn: "2h" });
}

module.exports = jwtGenerator;
