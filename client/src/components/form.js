import React, { Component } from "react";

export default class Form extends Component {
  state = {
    description: "",
    location: "",
    image: ""
  };

  Post = () =>
    console.log(
      `P: ${this.state.description} L: ${this.state.location} I: ${this.onImageChange}`
    );
  onDescriptionChange = e => this.setState({ post: e.target.value });
  onLocationChange = e => this.setState({ location: e.target.value });
  //image change
  onImageChange = e => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      console.log("img data:", e.target.result);
    };
  };
  //end of image change
  render() {
    return (
      <div className="row py-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="row">
            <div className="col">
              <h2>Make a post!</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="Description"
                  name="foodimage"
                  className="form-control"
                  id="DescriptionInput"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                  onChange={this.onPostChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="Location"
                  className="form-control"
                  id="locationInput"
                  placeholder="Where is this?"
                  onChange={this.onLocationChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  placeholder="place an image"
                  onChange={e => this.onImageChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="submit"
                className="btn btn-block btn-outline-secondary"
                onClick={this.Post}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
