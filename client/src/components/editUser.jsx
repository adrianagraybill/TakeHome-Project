import React, { Fragment, useState } from 'react';
import './editUser.scss'

const EditUser = ({ users }) => {

  const [user_name, setUserName] = useState(users.user_name);
  const [user_email, setUserEmail] = useState(users.user_email);
  const [user_phone, setUserPhone] = useState(users.user_phone);

  const updateUser = async(e) => {
    e.preventDefault();
    try {
      const body = { user_name, user_email, user_phone };
      const response = await fetch(`http://localhost:8000/users/${users.user_id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body)
      });

      //refresh page
      window.location = "/";

    } catch (err) {
      console.log(err.message)
    }
  }

  return <Fragment>
    <div
      className="container"
    >
      <button
        type="button"
        className="btn"
        id="editBtn"
        data-toggle="modal"
        data-target={`#id${users.user_id}`}
      >
        Edit
      </button>

      <div className="modal fade" id={`id${users.user_id}`} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Contact Information</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => {
                  setUserName(users.user_name)
                  setUserEmail(users.user_email)
                  setUserPhone(users.user_phone)
                  }
                }
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              Name <input
                className="form-control"
                type="text"
                value={user_name}
                onChange={e => setUserName(e.target.value)}
              />
              Email <input
                className="form-control"
                type="text"
                value={user_email}
                onChange={e => setUserEmail(e.target.value)}
              />
              Phone Number <input
                className="form-control"
                type="text"
                value={user_phone}
                onChange={e => setUserPhone(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button"
                id="editBtn"
                data-dismiss="modal"
                onClick = {e => updateUser(e)}
              >
                Edit
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </Fragment>
};

export default EditUser;
