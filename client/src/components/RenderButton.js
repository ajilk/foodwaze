import React, { Component } from "react";
import Form from "./form";
export default class Rutton extends React.Component {
  state = { answer: "" };
  handleSubmit = event => {
    this.setState({ answer: event.target.name });
  };
  render() {
    return (
      <div>
        {this.state.answer === "yes" && <Form />}
        {this.state.answer === "yes" ? null : (
          <button onClick={this.handleSubmit} name="yes">
            Create a post!
          </button>
        )}
      </div>
    );
  }
}
