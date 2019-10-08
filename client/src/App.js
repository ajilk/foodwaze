import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router'

class App extends Component {
  state = {
    message: ''
  }

  componentDidMount = () => this.fetchMessage();

  fetchMessage = async () => {
    let ID = 1
    const response = await fetch(`api/${ID}`)
    const message = response.json()
    this.setState({ message: message })
  }

  render() {
    return (
      <div class="container text-center p-5">
        <h1>findfreefood</h1>
        <h5 class="text-danger">[ in-progess ]</h5>
        <h5>{this.state.message}</h5>
      </div>
    );
  }
}

export default App;
