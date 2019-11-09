import React, { Component } from 'react'

export default class SignupPage extends Component {
  state = {
    email: '',
    password: '',
    verifyPassword: '', 
  }

  signUp = () => console.log(`U: ${this.state.email} P: ${this.state.password}`);
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onVerifyPasswordChange = (e) => this.setState({ verifyPassword: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });

  render() {
    return (
      <div className="row justify-content-center">
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
