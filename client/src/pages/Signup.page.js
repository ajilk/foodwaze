import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom';
import auth from '../services/auth';

export default class SignupPage extends Component {
  state = {
    redirectToReferrer: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: '',
  }

  onFieldChange = (name) => {
    return (event) => this.setState({ [name]: event.target.value })
  }

  signUp = (event) => {
    event.preventDefault();
    let { firstName, lastName, email, password } = this.state;
    auth.signUp(firstName, lastName, email, password)
      .then(user => {
        this.setState({ redirectToReferrer: true });
      }).catch(err => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) return <Redirect to={from} />

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
    const verifyPasswordInput = <input
      type="password"
      className="form-control"
      id="verifyPasswordInput"
      placeholder="verify password"
      onChange={this.onFieldChange('verifyPassword')}
    />
    const firstName = <input
      type="text"
      className="form-control"
      id="firstNameInput"
      placeholder="firstname"
      onChange={this.onFieldChange('firstName')}
    />
    const lastName = <input
      type="text"
      className="form-control"
      id="lastNameInput"
      placeholder="lastname"
      onChange={this.onFieldChange('lastName')}
    />

    return (
      <form onSubmit={this.signUp}>
        <div className="row py-5 justify-content-center" >
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col">
                <h2>hello</h2>
              </div>
            </div>
            <div className="row">
              <div className="col pr-0">
                <div className="form-group">{firstName}</div>
              </div>
              <div className="col">
                <div className="form-group">{lastName}</div>
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
                <div className="form-group">{verifyPasswordInput}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-block btn-outline-secondary"
                >sign up</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
