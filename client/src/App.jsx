import React, { Fragment } from 'react';
import './App.scss';

//COMPONENTS
import NewUser from './components/newUser';
import ListUsers from './components/listUsers';


function App() {
  return (
    <Fragment>
      <div>
        <NewUser />
      </div>
    </Fragment>
  );
}

export default App;
