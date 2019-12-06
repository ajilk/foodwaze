import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../services/auth';
import AuthButton from './AuthButton';
import brandLogo from '../media/brandLogo_light.png';

export default class NavbarComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark border-bottom shadow mb-5" style={{ backgroundColor: "#d3d3d3" }}>
        <div className="container">
          <Link to='/'><img className="" src={brandLogo} width="50" alt="" /></Link>
          <Link to='/' className="pl-3 navbar-brand"><h3 className="mb-0 mt-2">foodwaze</h3></Link>
          <AuthButton />
        </div>
      </nav >
    );
  }
}
