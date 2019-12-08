import React, { Component } from 'react'
import auth from '../services/auth';

export default class ProfilePage extends Component {
  state = {
    user: {},
  }

  componentDidMount() {
    auth.getUser((user) => this.setState({ user: user }));
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
