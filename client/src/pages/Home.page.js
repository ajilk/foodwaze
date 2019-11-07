import React, { Component } from 'react'
import FilterComponent from '../components/Filter.component'

export default class HomePage extends Component {
  state = {
    searchFieldValue: 'Try Queens College',
  }

  onSearchFieldChange = (e) => this.setState({ searchFieldValue: e.target.value });

  onSearch = () => console.log('searched ' + this.state.searchFieldValue);

  onFilterClick = (id) => console.log(`go to provider\'s post => id=${id}`);

  render() {
    let searchField = (
      <div className="row justify-content-center my-5">
        <div className="col pr-0">
          <input
            type="text"
            className="form-control rounded-0 border-right-0"
            id="searchField"
            placeholder={this.state.searchFieldValue}
            onChange={this.onSearchFieldChange}>
          </input>
        </div>
        <div className="col-1 pl-0">
          <button onClick={this.onSearch} className="btn btn-outline-dark rounded-0">search</button>
        </div>
      </div>
    );

    return (
      <div>
        <h1>HomePage</h1>
        {searchField}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-10">
            <FilterComponent imgSrc={require('../logos/brooklyn-college-logo.png')} onClick={() => this.onFilterClick(1)} />
          </div>
          <div className="col-lg-6 col-10">
            <FilterComponent imgSrc={require('../logos/hunter-college-logo.png')} onClick={() => this.onFilterClick(2)} />
          </div>
          <div className="col-lg-6 col-10">
            <FilterComponent imgSrc={require('../logos/johnjay-college-logo.png')} onClick={() => this.onFilterClick(3)} />
          </div>
          <div className="col-lg-6 col-10">
            <FilterComponent imgSrc={require('../logos/queens-college-logo.png')} onClick={() => this.onFilterClick(4)} />
          </div>
        </div>
      </div>
    );
  }
}
