import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Regsiter';
import Login from './components/auth/Login';
import store from './store';

import './App.css';

//Check for token
if (localStorage.jwtToken) {
  //set auth token to the header
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decode = jwt_decode(localStorage.jwtToken);
  //Set the user and is authenticated
  store.dispatch(setCurrentUser(decode));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
