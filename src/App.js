import React, { useState, useEffect, Component } from 'react';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Tracker from './components/Tracker/Tracker';
import Graph from './components/Graph';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import { SignIn, SignUp } from 'src/Components/viewpages';
import SignIn from './signin.js';
import SignUp from './signup.js';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import baseUrl from './helpers/routes';
import history from './history';



class App extends Component { 
  state = {
    user: null,
    loggedIn: false
  };

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      fetch(baseUrl.profile, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((data) =>
          this.setState(() => ({
            user: data.user,
          }))
        );
    } else {
      history.push(ROUTES.HOME);
    }
  }

  signUpHandler = (userObj) => {
    fetch(baseUrl.signUp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: userObj.username,
          password: userObj.password,
          email: userObj.email,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem('token', data.jwt);
        this.setState(
          () => ({
            user: data.user,
          }),
          () => history.push(ROUTES.GRAPH)
        );
      });
  };

  signInHandler = (userObj) => {
    fetch(baseUrl.signIn, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: userObj.email,
          password: userObj.password,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem('token', data.jwt);
        this.setState(
          () => ({
            user: data.user,
            loggedIn: true
          }),
          () => history.push(ROUTES.GRAPH)
        );
      });
      // console.log("state:", this.state)
      return (

        <Link to="/graph"/>
      )
  };
  
  render() {

    const { user, loggedIn } = this.state;
    return (
      <Router history={history}>
          <div>
            <Nav loggedIn={loggedIn}/>
          </div>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/tracker" component={Tracker}/>
            <Route path="/graph" component={Graph}/>
          
            <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.GRAPH}
            path={ROUTES.SIGN_IN}
            exact>
              <SignIn signInHandler={this.signInHandler} />
            </IsUserRedirect>

            <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.SIGN_IN}
            path={ROUTES.SIGN_UP}
            exact>
              <SignUp signUpHandler={this.signUpHandler} />
            </IsUserRedirect>

            <ProtectedRoute user={user} path={ROUTES.GRAPH} exact>
              <Graph user={user} />
            </ProtectedRoute>

            <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.GRAPH}
            path={ROUTES.HOME}
            exact>
              <Home />
            </IsUserRedirect>

          </Switch>
          
        </div>
      </Router>
    );
  }
}


export default App;
