import React, { Fragment, useState } from 'react';
import './newUser.scss';

const NewUser = () => {

  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_phone, setUserPhone] = useState("");

  const onFormSubmit = async(e) => {
    e.preventDefault();
    try {
      const body = { user_name, user_email, user_phone }
      const response = fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);

      //refresh page
      window.location = "/dashboard";
      
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
  <Fragment>


    <form className="newUserForm" onSubmit={onFormSubmit}>
      <input
        className="newUserInput"
        placeholder="Name"
        type="text"
        value={user_name}
        onChange={e => setUserName(e.target.value)}
        />
      <input
        className="newUserInput"
        placeholder="Email"
        type="text"
        value={user_email}
        onChange={e => setUserEmail(e.target.value)}
        />
      <input
        className="newUserInput"
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
