'use strict';

const router = require('express').Router();
const pool = require('../db');

//register

router.post("/register", async (req, res) => {
  try {
    const { user_name, user_email, user_password } = req.body;
    
    const account = await pool.query("SELECT * FROM accounts WHERE user_email = $1", [user_email]);
      if (account.rows.length !== 0) {
        return res.status(401).send('Account already exists');
      }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;
