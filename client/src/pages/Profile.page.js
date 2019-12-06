import React, { Component } from 'react'

export default class ProfilePage extends Component {
  componentDidMount() {
    fetch('/api/auth/user', {
      method: 'GET',
    }).then(response => {
      response.json().then(value => { this.setState({ user: value }) })
    });
  }

  state = {
    user: {},
  }

  render() {
    return (
      <div>
        <h1>{this.state.user['firstName']}</h1>
        <h1>{this.state.user['lastName']}</h1>
      </div>
    )
  }
}
