import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../services/auth';
import AuthButton from './AuthButton';

export default class NavbarComponent extends Component {

  signout() {
    withRouter(({ history }) => auth.signout().then(() => history.push('/')));
  }

  render() {
    const signoutBtn = <button
      className="btn btn-outline-dark border-right-0 rounded-left"
      onClick={this.signout}
    >sign out</button>

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src="./public/brand.png" width="30" height="30" alt="" />
        </a>
        <Link to='/' className="navbar-brand">foodwaze</Link>
        <AuthButton />
      </nav>
    )
  }
}
