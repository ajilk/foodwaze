import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../services/auth';
import brandLogo from '../media/brandLogo_light.png';

class NavbarComponent extends Component {
  signout = () => {
    auth.signout().then(() => this.props.history.push('/'));
    this.props.onSignOut();
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark border-bottom-0 shadow mb-4" style={{ backgroundColor: "#d3d3d3" }}>
        <div className="container">
          <Link to='/'><img className="" src={brandLogo} width="50" alt="" /></Link>
          <Link to='/' className="pl-3 navbar-brand d-none d-sm-block"><h3 className="mb-0 mt-2">foodwaze</h3></Link>
          {!this.props.authenticated
            ? <div className="col px-0">
              <div className="input-group">
                <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append ml-auto">
                  <button className="btn btn-outline-light border-right-0 rounded-left">login</button>
                </Link>
                <Link to='/signup' style={{ textDecoration: 'none' }} className="input-group-append">
                  <button className="btn btn-outline-light rounded-right">signup</button>
                </Link>
              </div>
            </div>
            : <div className="col px-0">
              <div className='input-group'>
                <div className="dropdown ml-auto input-group-append">
                  <button className='btn btn-outline-light dropdown-toggle border-right-0 rounded-left' href='#' data-toggle='dropdown'>
                    {this.props.user['firstName']}
                  </button>
                  <div className='dropdown-menu'>
                    <Link to='/profile' className='dropdown-item' style={{ textDecoration: 'none' }}>account</Link>
                    <Link to='/post' className='dropdown-item' style={{ textDecoration: 'none' }}>post</Link>
                  </div>
                </div>
                <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append">
                  <button className="btn btn-outline-light rounded-right" onClick={this.signout}>sign out</button>
                </Link>
              </div >
            </div >
          }
        </div>
      </nav >
    );
  }
}
export default withRouter(NavbarComponent);