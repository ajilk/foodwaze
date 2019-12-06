import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../services/auth';

class AuthButton extends Component {
  componentDidMount() {
    fetch('/api/auth/user', {
      credentials: 'include',
      method: 'GET',
    }).then(response => {
      console.log(response)
      response.json().then(value => { this.setState({ user: value }) })
    });
  }

  state = {
    user: {},
  }

  render() {
    const { history } = this.props;
    const signout = () => auth.signout().then(() => history.push('/'));

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
      <div className='input-group'>
        <div className="dropdown ml-auto input-group-append">
          <button className='btn btn-outline-light dropdown-toggle border-right-0 rounded-left' href='#' data-toggle='dropdown'>
            {this.state.user['firstName']} {this.state.user['lastName']}
          </button>
          <div className='dropdown-menu'>
            <Link to='/profile' className='dropdown-item' style={{ textDecoration: 'none' }}>
              account
            </Link>
          </div>
        </div>
        <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append">
          <button className="btn btn-outline-light rounded-right" onClick={signout}>sign out</button>
        </Link>
      </div >
    );
  }
}

export default withRouter(AuthButton);