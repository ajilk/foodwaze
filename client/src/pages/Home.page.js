import React, { Component } from 'react'
import PostComponent from '../components/Post.component';
import FilterComponent from '../components/Filter.component';
import { GoSearch } from "react-icons/go";

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
    var filteredPosts = this.state.allPosts.filter(post => {
      return post['title'].match(regex)
        || post['location'].match(regex)
        || post['description'].match(regex)
    });
    this.setState({ posts: filteredPosts });
  }

  onQuickSearch = (searchValue) => {
    this.setState({ searchFieldValue: searchValue });
    this.onSearch(searchValue)
  }

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
            <a className="dropdown-item" href="#kosher">Kosher</a>
            <a className="dropdown-item" href="#no-kosher">Non-kosher</a>
            <a className="dropdown-item" href="#either">Either</a>
          </div>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Distance</button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#2miles">within 2 miles</a>
            <a className="dropdown-item" href="#5miles">within 5 miles</a>
            <a className="dropdown-item" href="#10miles">within 10 miles</a>
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
            <a className="dropdown-item" href="#pizza">Pizza</a>
            <a className="dropdown-item" href="#sushi">Sushi</a>
            <a className="dropdown-item" href="#drinks">Drinks</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="no-preference">No Preference</a>
          </div>
        </div>
      </>
    );

    let searchField = (
      <>
        <div className="row">
          <div className="col">
            <div className="input-group">
              <input
                onChange={this.onSearchFieldChange}
                className="form-control py-2 border-secondary border-right-0"
                type="search"
                value={this.state.searchFieldValue}
                placeholder="Try Pizza"
              />
              <span className="input-group-append">
                <div className="input-group-text bg-transparent border border-secondary border-left-0">
                  <GoSearch className="p-0" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </>
    );

    return (
      <div>
        <div>{searchField}</div>
        <div className="row no-gutters mb-3">{filters}</div>
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
