import React, { Fragment, useEffect, useState } from 'react';
import './listUsers.scss'

import EditUser from './editUser';

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const deleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:8000/users/${id}`, {
        method: "DELETE"
      });
      setUsers(users.filter(user => user.user_id !== id));
      console.log(deleteUser);
    } catch (err) {
      console.log(err.mesagge);
    }
  }

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
          <td className="tdWide">Name</td>
          <td className="tdWide">Email</td>
          <td className="tdWide">Phone Number</td>
          <td className="tdNarrow"></td>
          <td className="tdNarrow"></td>
        </tr>
      </thead>
      <tbody>
        {users.map(users => (
          <tr key={users.user_id}>
            <td className="tdWide">{users.user_name}</td>
            <td className="tdWide">{users.user_email}</td>
            <td className="tdWide">{users.user_phone}</td>
            <td>
              <EditUser users={users}/>
            </td>
            <td>
              <button 
                className="btn" 
                id="deleteBtn"
                onClick={() => deleteUser(users.user_id)}
              > 
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>;
};

export default ListUsers;
