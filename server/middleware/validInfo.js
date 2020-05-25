'use strict';

module.exports = (req, res, next) => {
  const { user_name, user_email, user_password } = req.body;

  function validateEmail(user_email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user_email);
  }

  // register route check

    if (req.path === "/register") {
      // checking for empty values
      if (![user_name, user_email, user_password].every(Boolean)) {
        return res.status(401).send("Missing Information");
      } 
      // checking for an invalid email
      else if (!validateEmail(user_email)) {
        return res.status(401).send("Invalid Email");
      }
    }
  
  // login route check
    if (req.path === "/login") {
      // checking for empty values
      if (![user_email, user_password].every(Boolean)) {
        return res.status(401).send("Missing Information");
      } 
      // checking for an invalid email
      else if (!validateEmail(user_email)) {
        return res.status(401).send("Invalid Email");
      }
    }

  next();
}