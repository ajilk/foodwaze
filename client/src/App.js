import React, { Component } from "react";
import HomePage from "./pages/Home.page";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import PostPage from "./pages/Post.page";
import ProfilePage from "./pages/Profile.page";
import NavbarComponent from "./components/Navbar.component";
import PrivateRoute from './components/PrivateRoute';
import auth from './services/auth';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    authenticated: false,
    user: {},
  }

  componentDidMount() {
    auth.getUser(user =>
      this.setState({
        authenticated: user.hasOwnProperty('id'),
        user: user
      })
    );
  }

  onSignOut = () => this.setState({ authenticated: false });
  onSignIn = () => auth.getUser(user => this.setState({ user: user, authenticated: true }));

  render() {
    return (
      <Router>
        <NavbarComponent authenticated={this.state.authenticated} user={this.state.user} onSignOut={this.onSignOut} />
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route path="/login" render={props => <LoginPage onSignIn={this.onSignIn} {...props} />} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
          <PrivateRoute path="/post" component={PostPage} />
        </div>
      </Router>
    );
  }
}

export default App;
