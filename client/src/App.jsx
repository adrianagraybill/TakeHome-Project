import React, { Fragment, useState } from 'react';
import './reset.scss';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//COMPONENTS
import NewUser from './components/newUser';
import ListUsers from './components/listUsers';

import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
        <Router>
            <Switch>
              <Route
                exact
                path="/login"
                render={props =>
                  !isAuthenticated ? (<Login {...props} setAuth = {setAuth}/>) : (<Redirect to="/dashboard" />)
                }
              />
              <Route 
                exact 
                path="/register" 
                render={props => 
                  !isAuthenticated ? (<Register {...props} setAuth = {setAuth}/>) : (<Redirect to="/login" />)
                }
              />
              <Route 
                exact 
                path="/dashboard" 
                render={props => 
                  isAuthenticated ? (<Dashboard {...props} setAuth = {setAuth}/>) : (<Redirect to="/login" />) 
                } 
              />
            </Switch>
        </Router>

        {/* <NewUser />
        <ListUsers /> */}
    </Fragment>
  );
}

export default App;
