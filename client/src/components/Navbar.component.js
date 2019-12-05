import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../services/auth';
import AuthButton from './AuthButton';
import brandLogo from '../media/brandLogo.png';

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
      <nav className="navbar navbar-expand-lg navbar-light mb-3">
        <Link to='/'><img className="" src={brandLogo} width="50" alt="" /></Link>
        <Link to='/' className="pl-2 navbar-brand"><h3 className="mb-0 mt-2">foodwaze</h3></Link>
        <AuthButton />
      </nav>
    )
  }
}
