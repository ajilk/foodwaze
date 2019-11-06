import React, { Component } from 'react';
import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import SignupPage from './pages/Signup.page';
import NavbarComponent from './components/Navbar.component'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <div className="container text-center">
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
