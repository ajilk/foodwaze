import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// TODO
// Conditional Navigation
// -> signed in state (does not show signup/login buttons)
// -> signed out state
export default class NavbarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to='/' className="navbar-brand">foodwaze</Link>
        <div className="input-group">
          <Link to='/login' style={{ textDecoration: 'none' }} className="ml-auto input-group-append">
            <button className="btn btn-outline-dark border-right-0 rounded-left">login</button>
          </Link>
          <Link to='/signup' style={{ textDecoration: 'none' }} className="input-group-append">
            <button className="btn btn-outline-dark rounded-right">signup</button>
          </Link>
        </div>
      </nav>
    )
  }
}
