'use strict';

const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo')

router.post("/register", validInfo , async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;
    
    const account = await pool.query("SELECT * FROM accounts WHERE user_email = $1", [user_email]);
      if (account.rows.length !== 0) {
        return res.status(401).send('Account already exists');
      }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const bcryptPassword = await bcrypt.hash(user_password, salt);
    const newAccount = await pool.query("INSERT INTO accounts (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [user_name, user_email, bcryptPassword]);
    const token = jwtGenerator(newAccount.rows[0].user_id);
    res.json({ token });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

router.post("/login", validInfo , async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const account = await pool.query("SELECT * FROM accounts WHERE user_email = $1", [user_email])
      if (account.rows.length === 0) {
        return res.status(401).send('Email or password is incorrect');
      }
    const validPassword = await bcrypt.compare(user_password, account.rows[0].user_password);
      if(!validPassword) {
        return res.status(401).send('Email or password is incorrect');
      }
    const token = jwtGenerator(account.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;
