import React, { Fragment, useState } from 'react';
import './newUser.scss';

const NewUser = () => {

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_phone, setUserPhone] = useState("");

  const onFormSubmit = async(e) => {
    e.preventDefault();
    try {
      const body = {user_name, user_email, user_phone}
      const response = fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      //refresh page
      window.location = "/";
      window.location = "/";
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
  <Fragment>
    <h1>Users Database</h1>
    <form onSubmit={onFormSubmit}>
      <input
        placeholder="Name"
        type="text"
        value={user_name}
        onChange={e => setUserName(e.target.value)}
        />
      <input
        placeholder="Email"
        type="text"
        value={user_email}
        onChange={e => setUserEmail(e.target.value)}
        />
      <input
        placeholder="Phone Number"
        type="text"
        value={user_phone}
        onChange={e => setUserPhone(e.target.value)}
        />
      <button id="addUserBtn">Add</button>
    </form>
  </Fragment>
  )
};

export default NewUser;
