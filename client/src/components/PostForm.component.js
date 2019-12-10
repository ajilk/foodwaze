import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PhotoDrop from "./PhotoDrop.component";

class PostForm extends Component {
  state = {
    title: "",
    description: "",
    location: "",
    image: {},
  };

  onFieldChange = (name) => {
    return (event) => this.setState({ [name]: event.target.value })
  }

  onPhotoUpload = (acceptedFiles) => {
    this.setState({ image: acceptedFiles[0] });
  }

  onPost = e => {
    e.preventDefault()
    var formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }
    fetch('/api/post/create', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .catch(err => console.log(err));
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.onPost}>
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
        <div className="form-group text-center">
          <PhotoDrop onDrop={this.onPhotoUpload} />
        </div>
        <button type="submit" className="btn btn btn-block btn-outline-primary">post</button>
      </form>
    );
  }
}
export default withRouter(PostForm)