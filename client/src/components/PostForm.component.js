import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import PhotoDrop from "./PhotoDrop.component";

class PostForm extends Component {
  state = {
    title: "",
    description: "",
    location: "",
    // image: {},
  };

  onFieldChange = (name) => {
    return (event) => this.setState({ [name]: event.target.value })
  }

  onPost = () => {
    fetch('/api/post/create', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json()
    ).then(body => {
      console.log(body);
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div>
        <div className="form-group"><h3>post</h3></div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="titleInput"
            placeholder="title"
            onChange={this.onFieldChange('title')}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="locationInput"
            placeholder="location"
            onChange={this.onFieldChange('location')}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="descriptionInput"
            rows="5"
            placeholder="description"
            onChange={this.onFieldChange('description')}
          >
          </textarea>
        </div>
        <div className="form-group">
          <PhotoDrop />
        </div>
        <button type="submit" className="btn btn btn-block btn-outline-primary" onClick={this.onPost}>post</button>
      </div>
    );
  }
}
export default withRouter(PostForm)