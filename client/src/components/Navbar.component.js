import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'

import auth from '../services/auth';

// TODO
// Conditional Navigation
// -> signed in state (does not show signup/login buttons)
// -> signed out state
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
        <Link to='/' className="navbar-brand">foodwaze</Link>
        {/* DOES NOT WORK HERE */}
        {auth.isAuthenticated ? signoutBtn :
          <div className="col px-0">
            <div className="input-group">
              <Link to='/login' style={{ textDecoration: 'none' }} className="ml-auto input-group-append">
                <button className="btn btn-outline-dark border-right-0 rounded-left">login</button>
              </Link>
              <Link to='/signup' style={{ textDecoration: 'none' }} className="input-group-append">
                <button className="btn btn-outline-dark rounded-right">signup</button>
              </Link>
            </div>
          </div>}
      </nav>
    )
  }
}
