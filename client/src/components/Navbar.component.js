import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import auth from '../services/auth';
import AuthButton from './AuthButton';

export default class NavbarComponent extends Component {
  render() {
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
