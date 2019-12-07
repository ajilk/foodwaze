import React, { Component } from "react";
import PhotoDrop from "./PhotoDrop.component";

class PostForm extends Component {
  state = {
    description: "",
    location: "",
    image: "",
    filter: []
  };

  Post = () => {
    console.log(
      `Description: ${this.state.description} Location: ${this.state.location} Image: ${this.state.image} F: ${this.state.filter}`
    );
  };

  onDescriptionChange = e => this.setState({ description: e.target.value });
  onLocationChange = e => this.setState({ location: e.target.value });
  onFilterChange = e => {
    console.dir(e.target.value);
    this.setState({
      filter:
        // e.target.value
        [...this.state.filter, e.target.value] // changes the filter array 
    });
    console.log(this.state.filter);
  };
  //image change
  onImageChange = e => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      this.setState({ image: e.target.result });
      //console.log("img data:", e.target.result);
    };
  };
  //end of image change
  render() {
    return (
      <div className="row py-5 justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <PhotoDrop />
        </div>
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
                  name="Description"
                  className="form-control"
                  id="DescriptionInput"
                  aria-describedby="emailHelp"
                  placeholder="Description"
                  onChange={this.onDescriptionChange}
                />
              </div>
            </div>
          </div>
          {/* Location start */}
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
          {/* Filter begin */}
          <div className="row">
            <div className="col">
              <div className="form-group">
                <select
                  type="filter"
                  className="form-control"
                  id="Filter"
                  placeholder="What kind of food are you interested in"
                  multiple={true}
                  // onClick={this.onFilterChange}
                  filter={this.state.value}
                >
                  <option onClick={this.onFilterChange} value="grapefruit">
                    Grapefruit
                  </option>
                  <option onClick={this.onFilterChange} value="lime">
                    Lime
                  </option>
                  <option onClick={this.onFilterChange} value="coconut">
                    Coconut
                  </option>
                  <option onClick={this.onFilterChange} value="mango">
                    Mango
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* Filter end */}
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  accept="image/*"
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
export default PostForm