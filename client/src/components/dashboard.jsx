import React, { Fragment, useState, useEffect } from 'react';

//COMPONENTS
import NewUser from './newUser';
import ListUsers from './listUsers';

const Dashboard = ({ setAuth }) => {

  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:8000/dashboard/", {
        method: "GET",
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();
      setName(parsedResponse.user_name);

    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  }

  useEffect(() => {
    getName();
  },[]);

  return (
    <Fragment>
      <div id="header">
      <button id="headerButton" onClick = { (e)=> logout(e) }>Logout</button>
      <h1 id="headerH">{name}'s Dashboard</h1>
      </div>
      <NewUser />
      <ListUsers />
    </Fragment>
  )
}

export default Dashboard;
