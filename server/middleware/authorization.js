'use strict';

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
      if(!jwtToken){
        return res.status(403).json("Unauthorized");
      } 
    const payload = jwt.verify(jwtToken, process.env.secret);
    req.account = payload.account;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Unauthorized");
  }
};
