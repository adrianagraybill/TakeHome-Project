import React, { Fragment, useEffect, useState } from 'react';
import './listUsers.scss'

const ListUsers = () => {

  const [users, setUsers] = useState([]);

  const deleteUser = async id => {
    try {
      const deleteUser = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE"
      });
      setUsers(users.filter(user => user.user_id !== id));
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
          <td class="tdWide">Name</td>
          <td class="tdWide">Email</td>
          <td class="tdWide">Phone Number</td>
          <td class="tdNarrow"></td>
          <td class="tdNarrow"></td>
        </tr>
      </thead>
      <tbody>
        {users.map(users => (
          <tr key={users.user_id}>
            <td class="tdWide">{users.user_name}</td>
            <td class="tdWide">{users.user_email}</td>
            <td class="tdWide">{users.user_phone}</td>
            <td>
              <button 
                class="btn"
                id="editBtn">Edit
              </button>
            </td>
            <td>
              <button 
                class="btn" 
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
