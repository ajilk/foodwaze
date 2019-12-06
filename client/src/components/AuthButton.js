import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../services/auth';
import ProfileButton from './ProfileButton';

class AuthButton extends Component {
  signout = () => {
    auth.signout().then(() => this.props.history.push('/'));
  }

  render() {
    if (!auth.isAuthenticated) {
      return (
        <div className="col px-0">
          <div className="input-group">
            <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append ml-auto">
              <button className="btn btn-outline-light border-right-0 rounded-left">login</button>
            </Link>
            <Link to='/signup' style={{ textDecoration: 'none' }} className="input-group-append">
              <button className="btn btn-outline-light rounded-right">signup</button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="col px-0">
        <div className='input-group'>
          <ProfileButton />
          <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append">
            <button className="btn btn-outline-light rounded-right" onClick={this.signout}>sign out</button>
          </Link>
        </div >
      </div >
    );
  }
}

export default withRouter(AuthButton);