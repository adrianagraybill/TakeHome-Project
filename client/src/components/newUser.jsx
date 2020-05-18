import React, { Fragment, userState, useState } from 'react';
import "./newUser.scss";

const NewUser = () => {

  const [userName, setUserName] = userState("Name");
  const [userEmail, setUserEmail] = useState("Email");
  const [userPhone, setUserPhone] = useState("Phone Number")

  return (
  <Fragment>
    <h1>Users Database</h1>
    <form>
      <input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
      <input type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)}/>
      <input type="text" value={userPhone} onChange={e => setUserPhone(e.target.value)}/>
      <button>Add</button>
    </form>
  </Fragment>
  )
};

export default NewUser;
