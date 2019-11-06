import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// TODO
// Conditional Navigation
// -> signed in state (does not show signup/login buttons)
// -> signed out state
export default class NavbarComponent extends Component {
  goHome = () => {
    // TODO: navigate home
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to='/' className="navbar-brand">foodwaze</Link>
        <Link to='/login' className="ml-auto">
          <button className="btn btn-outline-dark">login</button>
        </Link>
        <Link to='/signup' className="ml-2">
          <button className="btn btn-outline-dark">signup</button>
        </Link>
      </nav>
    )
  }
}
