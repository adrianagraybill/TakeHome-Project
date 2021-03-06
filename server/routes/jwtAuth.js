'use strict';

const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');

router.post("/register", validInfo , async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;
    
    const account = await pool.query("SELECT * FROM accounts WHERE user_email = $1", [user_email]);
      if (account.rows.length !== 0) {
        return res.status(401).json('An account with that email already exists.');
      }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(user_password, salt);
    const newAccount = await pool.query("INSERT INTO accounts (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [user_name, user_email, bcryptPassword]);
    const token = jwtGenerator(newAccount.rows[0].user_id);
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.post("/login", validInfo , async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const account = await pool.query("SELECT * FROM accounts WHERE user_email = $1", [user_email])
      if (account.rows.length === 0) {
        return res.status(401).json('Email or password is incorrect.');
      }
    const validPassword = await bcrypt.compare(user_password, account.rows[0].user_password);
      if(!validPassword) {
        return res.status(401).json('Email or password is incorrect.');
      }
    const token = jwtGenerator(account.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.get("/is-verified", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
