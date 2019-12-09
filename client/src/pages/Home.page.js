import React, { Component } from 'react'
import auth from '../services/auth';
import PhotoDrop from '../components/PhotoDrop.component';
import PostComponent from '../components/Post.component';
import PostPage from './Post.page';
import FilterComponent from '../components/Filter.component';

export default class HomePage extends Component {
  state = {
    searchFieldValue: "",
    allPosts: [],
    posts: [],
  };

  async componentDidMount() {
    await fetch('/api/post/all', {
      method: 'GET',
    }).then(response => response.json()
    ).then(body => this.setState({ allPosts: body, posts: body }));
  }

  onSearchFieldChange = e => {
    const searchValue = e.target.value;
    this.setState({ searchFieldValue: searchValue });
    if (searchValue === '' || !/\S/.test(searchValue))
      this.setState({ posts: this.state.allPosts });
    else this.onSearch(searchValue);
  }

  onSearch = (searchValue) => {
    const regex = new RegExp(searchValue, 'i');
    var filteredPosts = this.state.allPosts.find(post => {
      return post['title'].match(regex)
        || post['location'].match(regex)
        || post['description'].match(regex)
    });
    console.log(filteredPosts);
    this.setState({ posts: filteredPosts ? [filteredPosts] : [] });
  }

  onQuickSearch = (searchValue) => {
    this.setState({ searchFieldValue: searchValue });
    this.onSearch(searchValue)
  }

  render() {
    const quickSearches =
      <div className="row">
        <div className="col"><button onClick={() => this.onQuickSearch('Brooklyn College')} className="btn btn-outline-dark">Brooklyn College</button></div>
        <div className="col"><button onCLick={() => this.onQuickSearch('Hunter College')} className="btn-outline-dark">Hunter College   </button></div>
        <div className="col"><button onCLick={() => this.onQuickSearch('Queens College')} className="btn-outline-dark">Queens College   </button></div>
        <div className="col"><button onCLick={() => this.onQuickSearch('John Jay College')} className="btn-outline-dark">John Jay College </button></div>
      </div>

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
            School
          </button>
          <div className="dropdown-menu">
            <FilterComponent value="Queens College" onFilterClick={this.onQuickSearch} />
            <FilterComponent value="Brooklyn College" onFilterClick={this.onQuickSearch} />
            <FilterComponent value="John Jay College" onFilterClick={this.onQuickSearch} />
            <FilterComponent value="Hunter College" onFilterClick={this.onQuickSearch} />
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
        <div className="card-columns" style={{ columnGap: '2.00rem' }}>{
          this.state.posts.length
            ? this.state.posts.map((post, i) => <PostComponent post={post} key={i} />)
            : null
        }
        </div>
      </div>
    );
  }
}
