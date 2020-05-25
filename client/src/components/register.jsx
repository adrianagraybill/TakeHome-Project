import React, { Fragment, useState } from 'react';
import './register.scss';

const Register = () => {

  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    user_password: ""
  });

  const { user_name, user_email, user_password } = inputs;

  const onChange =(e) => {
    setInputs({ ...inputs, [e.target.name] : e.target.value });
  };

  const onSubmitForm = async(e) => {
    e.preventDefault();

    try {
      const body = { user_name, user_email, user_password };
      const response = await fetch("http://localhost:8000/auth/register", {
        method:"POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse)
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 id="registerHeader">Register</h1>
      <form id="registerForm" onSubmit={onSubmitForm}>
        <input 
          className="form-control registerInput"
          type="text"
          name="user_name"
          placeholder="Name"
          value={user_name}
          onChange={e => onChange(e)}
        />
        <input
          className="form-control registerInput"
          type="email"
          name="user_email"
          placeholder="Email"
          value={user_email}
          onChange={e => onChange(e)}
        />
        <input
          className="form-control registerInput"
          type="password"
          name="user_password"
          placeholder="Password"
          value={user_password}
          onChange={e => onChange(e)}
        />
        <button id="registerButton">Submit</button>
      </form>
    </Fragment>
  )
}

export default Register;
