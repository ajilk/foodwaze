import React, { Component } from "react";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import PostPage from "./pages/Post.page";
import ProfilePage from "./pages/Profile.page";
import NavbarComponent from "./components/Navbar.component";
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/post" component={PostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
