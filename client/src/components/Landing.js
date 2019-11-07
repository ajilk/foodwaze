import React, { Component } from 'react';
import './Landing.css';
import PostsPage from '../pages/PostsPage';

class Landing extends Component {
  constructor(props) {
    super(props);
  this.state = {
    school: ""
  };

  this.handleClick = this.handleClick.bind(this);
}

   handleClick (e) {
    e.preventDefault();
    this.setState({school: e.target.alt});
    //console.log(this.state.school)
    if (this.state.school)
    <PostsPage school={this.state.school}/>
  }
  
  render() {
    return (
      <table>
        <tr>
        
          <td class="hunter">
            <button onClick={this.handleClick}>
              <img src={require("../logos/hunter-college-logo.png")} alt="hunter"/>
              </button>
              </td> 
          <td class="brook">
          <button onClick={this.handleClick} >
            <img src={require("../logos/brooklyn-college-logo.png")} alt="brooklyn"/>
            </button>
          </td>
        </tr>
        <tr>
          <td class="queens">
            <button onClick={this.handleClick} >
              <img src={require("../logos/queens-college-logo.png")} alt="queens"/>
              </button>
              </td>
          <td class="john">
          <button onClick={this.handleClick}>
            <img src={require("../logos/johnjay-college-logo.png")} alt="john"/>
            </button>
            </td>

        </tr>
      </table>
    );
  }
}
export default Landing;