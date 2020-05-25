import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    user_email: "",
    user_password: ""
  });

  const { user_email, user_password } = inputs;

  const onChange =(e) => {
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  };

  const onSubmitForm = async(e) => {
    e.preventDefault();

    try {
      const body = { user_email, user_password };
      const response = await fetch("http://localhost:8000/auth/login", {
        method:"POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      const parsedResponse = await response.json();
      localStorage.setItem("token", parsedResponse.token);
      setAuth(true);

    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 id="loginHeader">Login</h1>
      <form id="loginForm" onSubmit={onSubmitForm}>
      <input
          className="form-control loginInput"
          type="email"
          name="user_email"
          placeholder="Email"
          value={user_email}
          onChange={e => onChange(e)}
        />
        <input
          className="form-control loginInput"
          type="password"
          name="user_password"
          placeholder="Password"
          value={user_password}
          onChange={e => onChange(e)}
        />
        <button id="loginButton">Submit</button>
      </form>
      <Link to="/register">Register</Link>
    </Fragment>
  )
}

export default Login;
