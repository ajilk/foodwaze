import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class ProfileButton extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    fetch('/api/auth/user', {
      credentials: 'include',
      method: 'GET',
    }).then(response => {
      console.log(response)
      response.json().then(value => { this.setState({ user: value }) })
    });
    console.log('hello???');
  }

  render() {
    return (
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
    )
  }
}

export default ProfileButton
