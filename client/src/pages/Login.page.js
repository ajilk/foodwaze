import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import auth from '../services/auth';

export default class LoginPage extends Component {
  state = {
    redirectToReferrer: false,
    failed: false,
    email: '',
    password: '',
  }

  onFieldChange = (name) => {
    return (event) => this.setState({ [name]: event.target.value })
  }

  signIn = (event) => {
    event.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then(user => {
        this.setState({ redirectToReferrer: true });
        this.props.onSignIn();
      }).catch(err => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    let error = failed
      ? <div className="alert alert-danger" role="alert">Login Failed</div>
      : "";

    const emailInput = <input
      type="email"
      className="form-control"
      id="emailInput"
      placeholder="email"
      onChange={this.onFieldChange('email')}
    />
    const passwordInput = <input
      type="password"
      className="form-control"
      id="passwordInput"
      placeholder="password"
      onChange={this.onFieldChange('password')}
    />

    return (
      <form onSubmit={this.signIn}>
        {error}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="form-group"><h2>welcome back</h2></div>
            <div className="form-group">{emailInput}</div>
            <div className="form-group">{passwordInput}</div>
            <button
              type="submit"
              className="btn btn-block btn-outline-secondary"
            >sign in</button>
          </div>
        </div>
      </form >
    );
  }
}