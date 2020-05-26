# TakeHome-Project
#### Author: Adriana Graybill

### Description
* A Progres Database using an express server with a user-friendly React front-end using Node.js to creat accounts and save contacts to an authenticated database. Using bcrypt for hashing passwords and using jwt to create tokens in to protect users. 

## Links
* [Server](https://github.com/adrianagraybill/TakeHome-Project/tree/master/server)
* [Client](https://github.com/adrianagraybill/TakeHome-Project/tree/master/client)

## Resources
* [Todo App Demo](https://www.youtube.com/watch?v=5vF0FGfa0RQ)
* [JWT Register/Login Demo](https://www.youtube.com/watch?v=7UQBMb8ZpuE)
* [Bootstrap 4](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

(Used this for just one modal, everything else was designed and styled on my own to be reactive and have a simple, easy to use interface.)
* [Migration Docs](https://salsita.github.io/node-pg-migrate/#/)
* [PSQL Command CheatSheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)
* [Postman](https://www.postman.com/)

## Server Dependencies
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [pg](https://www.npmjs.com/package/pg)

## Client Dependencies
* [node-sass](https://www.npmjs.com/package/node-sass)
* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [react-toastify](https://www.npmjs.com/package/react-toastify)
* [toastify](https://www.npmjs.com/package/toastify)

## Setup
### .env requirements
* Create a .env file at the root of the server file with the following example, the secret can be anything:
```secret=enterwhateveryouwouldlikehere```
* Server PORT - 8000
* Client PORT - 3000

### Database 
* This app runs on your local machine, make sure to have postgres installed on your local machine, here is the [link](https://www.postgresql.org/download/). 

* Follow database.sql in this repo schema to create database and correct tables on your local machine. Futher instructions [here](https://www.postgresql.org/docs/9.1/tutorial-createdb.html) 

## Running the Server
* On your command line cd into the root of the server folder, then type ```nodemon``` to start the server and for it to stay running.

## Running the Client
* On your command line cd into the root of the client folder, then type ```npm start``` to start the client side

## Routes
```js
// Register and login
app.use("/auth", require("./routes/jwtAuth.js"));

// Dashboard
app.use("/dashboard", require("./routes/dashboard.js"));

// Create user
app.post('/users', async(req, res) => {

// Get all users
app.get('/users', async(req, res) => {

// Get one user
app.get('/users/:id', async(req, res) => {

// Update one user
app.put('/users/:id', async(req, res) => {

// Delete one user
app.delete('/users/:id', async(req, res) => {

```

## App Screenshots
![Register Page](https://github.com/adrianagraybill/TakeHome-Project/blob/master/client/public/imgs/register.png)
---
![Login Page](https://github.com/adrianagraybill/TakeHome-Project/blob/master/client/public/imgs/login.png)
---
![Dashboard Page](https://github.com/adrianagraybill/TakeHome-Project/blob/master/client/public/imgs/dashboard.png)
