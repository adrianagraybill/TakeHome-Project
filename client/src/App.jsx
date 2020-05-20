import React, { Fragment } from 'react';
import './reset.scss';
import './App.scss';

//COMPONENTS
import NewUser from './components/newUser';
import ListUsers from './components/listUsers';


function App() {
  return (
    <Fragment>
      <div>
        <NewUser />
        <ListUsers />
      </div>
    </Fragment>
  );
}

export default App;
