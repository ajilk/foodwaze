import React, { Component } from 'react'
import auth from '../services/auth';
import PhotoDrop from '../components/PhotoDrop.component';
import PostComponent from '../components/Post.component';
import PostPage from './Post.page';

export default class HomePage extends Component {
  state = {
    searchFieldValue: "",
    posts: [],
  };

  async componentDidMount() {
    await fetch('/api/post/all', {
      method: 'GET',
    }).then(response => response.json()
    ).then(body => this.setState({ posts: body }));
  }

  onSearchFieldChange = e => this.setState({ searchFieldValue: e.target.value });

  onSearch = () => console.log("searched " + this.state.searchFieldValue);

  render() {
    let filters = (
      <>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Kosher
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Kosher
            </a>
            <a className="dropdown-item" href="#">
              Non-kosher
            </a>
            <a className="dropdown-item" href="#">
              Either
            </a>
          </div>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Distance
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              within 2 miles
            </a>
            <a className="dropdown-item" href="#">
              within 5 miles
            </a>
            <a className="dropdown-item" href="#">
              within 10 miles
            </a>
          </div>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Preference
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Pizza
            </a>
            <a className="dropdown-item" href="#">
              Sushi
            </a>
            <a className="dropdown-item" href="#">
              Drinks
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              No Preference
            </a>
          </div>
        </div>
      </>
    );

    let searchField = (
      <div className="row mb-3">
        <div className="col-lg-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-left border-right-0"
              id="searchField"
              placeholder="Try Queens College"
              value={this.state.searchFieldValue}
              onChange={this.onSearchFieldChange}
            ></input>
            <div className="input-group-append">
              <button
                onClick={this.onSearch}
                className="btn btn-outline-dark rounded-right"
              >
                search
              </button>
            </div>
          </div>
        </div>
        <div className="col-auto">{filters}</div>
      </div>
    );

    return (
      <div>
        {searchField}
        <div className="card-columns" style={{ columnGap: '2.00rem' }}>
          {this.state.posts.map((post, i) =>
            <PostComponent post={post} key={i} />
          )}
        </div>
      </div>
    );
  }
}
