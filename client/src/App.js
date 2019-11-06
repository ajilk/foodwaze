import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './components/Landing';
import PostsPage from './pages/PostsPage';


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
     <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/posts" component={PostsPage} />
      </div>
    </Router>  
      </div>
    );
  }
}

export default App;
