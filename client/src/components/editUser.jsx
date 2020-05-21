import React, { Fragment, useState } from 'react';

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
      class="container"
    >
      <button
        type="button"
        class="btn"
        id="editBtn"
        data-toggle="modal"
        data-target={`#id${users.user_id}`}
      >
        Edit
      </button>

      <div class="modal fade" id={`id${users.user_id}`} role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Contact Information</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                value={user_name}
                onChange={e => setUserName(e.target.value)}
              />
              <input
                class="form-control"
                type="text"
                value={user_email}
                onChange={e => setUserEmail(e.target.value)}
              />
              <input
                class="form-control"
                type="text"
                value={user_phone}
                onChange={e => setUserPhone(e.target.value)}
              />
            </div>
            <div class="modal-footer">
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
