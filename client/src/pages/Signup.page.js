import React, { Component } from 'react'

export default class SignupPage extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    verifyPassword: '', 
  }

  signUp = () => console.log(`U: ${this.state.email} P: ${this.state.password}`);
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onVerifyPasswordChange = (e) => this.setState({ verifyPassword: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onFirstNameChange = (e) => this.setState({ firstName: e.target.value });
  onLastNameChange = (e) => this.setState({ lastName: e.target.value });

  render() {
    return (
      <div className="row py-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="row">
            <div className="col">
              <h2>hello</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="email" onChange={this.onEmailChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col pr-0">
              <div className="form-group">
                <input type="text" className="form-control" id="firstNameInput" aria-describedby="firstNameHelp" placeholder="firstname" onChange={this.onFirstNameChange} />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <input type="text" className="form-control" id="lastNameInput" aria-describedby="lastNameHelp" placeholder="lastname" onChange={this.onLastNameChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input type="password" className="form-control" id="passwordInput" placeholder="password" onChange={this.onPasswordChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input type="password" className="form-control" id="verifyPasswordInput" placeholder="verify password" onChange={this.onVerifyPasswordChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-block btn-outline-secondary" onClick={this.signUp}>sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
