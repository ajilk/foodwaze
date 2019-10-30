import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router'
import Landing from './components/Landing';

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount = () => this.fetchMessage();

  fetchMessage = async () => {
    let ID = 4
    await fetch(`api/${ID}`).then(res => {
      res.json().then(msg => {
        this.setState({ message: msg.body })
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="container text-center p-5">
        <h1>foodwaze</h1>
        <h5 className="text-danger">[ in-progess ]</h5>
        <h5>Server sent: {this.state.message}</h5>
        <Landing/>
      </div>
    );
  }
}

export default App;
