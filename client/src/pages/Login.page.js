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
        <div className="row py-5 justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col">
                <h2>welcome back</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">{emailInput}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">{passwordInput}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-block btn-outline-secondary"
                >sign in</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}