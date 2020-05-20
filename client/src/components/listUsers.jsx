import React, { Fragment, useEffect, useState } from 'react';
import './listUsers.scss'

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users")
      const jsonData = await response.json()

      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <Fragment>
    <table>
      <thead>
        <tr id="headerRow">
          <td class="tdWide">Name</td>
          <td class="tdWide">Email</td>
          <td class="tdWide">Phone Number</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr>
            <td class="tdWide">{user.user_name}</td>
            <td class="tdWide">{user.user_email}</td>
            <td class="tdWide">{user.user_phone}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>;
};

export default ListUsers;
