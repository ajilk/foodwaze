import React, { Component } from "react";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import PostsPage from "./pages/Posts.page";
import NavbarComponent from "./components/Navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavbarComponent />
          <div className="container text-center">
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/posts" component={PostsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
