import React, { Component } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <table>
        <tr>
          <button >
          <td class="hunter"><img src={require("../logos/hunter-college-logo.png")} alt="hunter" /></td> </button>

          <td class="brook"> 
            <img src={require("../logos/brooklyn-college-logo.png")} alt="brooklyn" />
          </td>

        </tr>
        <tr>

          <td class="queens"><img src={require("../logos/queens-college-logo.png")} alt="queens" /></td>

          <td class="john"><img src={require("../logos/johnjay-college-logo.png")} alt="john" /></td>

        </tr>
      </table>
    );
  }
}
export default Landing;