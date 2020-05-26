import React, { Fragment, useState, useEffect } from 'react';
import './reset.scss';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//COMPONENTS

import Dashboard from './components/dashboard';
import Login from './components/login';
import Register from './components/register';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:8000/auth/is-verified", {
        method: "GET",
        headers: {
          token: localStorage.token
        }
      });

      const parsedResponse = await response.json();
      parsedResponse === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

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


    </Fragment>
  );
}

export default App;
