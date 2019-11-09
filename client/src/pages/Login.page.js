import React, { Component } from 'react'

export default class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }

  signIn = () => console.log(`U: ${this.state.email} P: ${this.state.password}`);
  onPasswordChange = (e) => this.setState({ password: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="row">
            <div className="col">
              <h2>welcome back</h2>
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
              <button type="submit" className="btn btn-block btn-outline-secondary" onClick={this.signIn}>sign in</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}