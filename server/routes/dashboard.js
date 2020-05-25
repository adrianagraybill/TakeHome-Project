'use strcit';

const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get("/", authorization, async (req, res) => {
  try {
    // req.accounts has the payload
    // pulls just user_name from token
    const account = await pool.query("SELECT user_name FROM accounts WHERE user_id = $1", [req.account]);
    res.send(account.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
