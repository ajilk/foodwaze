import React, { Component } from "react";
import Form from "../components/form";

export default class PostsPpage extends Component {
  render() {
    const { location } = this.props.location.state;
    return (
      <div>
        <h1>
          Post Page for location: <b>{location}</b>
        </h1>
        <Form />
      </div>
    );
  }
}
