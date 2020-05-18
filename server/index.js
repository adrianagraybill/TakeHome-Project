'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db.js');

//MIDDLEWARE
app.use(cors());
app.use(express.json()); 

//ROUTES

//create user
app.post('/users', async(req, res) => {
  try {
    const { user_name, user_email, user_phone } = req.body;
    const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_phone) VALUES($1, $2, $3) RETURNING *", [ user_name, user_email, user_phone ]);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all users
app.get('/users', async(req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one user
app.get('/users/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const users = await pool.query("SELECT * FROM users WHERE user_id = $1", [ id ]);
    res.json(users.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update one user
app.put('/users/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const { user_name, user_email, user_phone } = req.body;
    const updateUser = await pool.query("UPDATE users SET (user_name, user_email, user_phone) = ($1, $2, $3) WHERE user_id = $4", [ user_name, user_email, user_phone, id]);
    res.json("User has been updated.");
  } catch (err) {
    console.error(err.message);
  }
});

//delete one user
app.delete('/users/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
    res.json("User has been deleted.")
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(8000, () => {
  console.log("server is up and running on port 8000");
});
