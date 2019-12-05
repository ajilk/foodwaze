import React, { Component } from 'react'
import FilterComponent from '../components/Filter.component'
import auth from '../services/auth';

export default class HomePage extends Component {
  state = {
    searchFieldValue: '',
  }

  onSearchFieldChange = (e) => this.setState({ searchFieldValue: e.target.value });
  onSearch = () => console.log('searched ' + this.state.searchFieldValue);
  filterLocation = (id) => {
    let location = ''
    switch (id) {
      case 0: location = 'Brooklyn College'; break;
      case 1: location = 'Hunter College'; break;
      case 2: location = 'John Jay College'; break;
      case 3: location = 'Queens College'; break;
    }
    this.setState({ searchFieldValue: location });
    this.props.history.push('/posts', {
      location: location
    });
  }

  render() {
    let filters = (
      <>
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Kosher
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Kosher</a>
            <a className="dropdown-item" href="#">Non-kosher</a>
            <a className="dropdown-item" href="#">Either</a>
          </div>
        </div>
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Distance
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">within 2 miles</a>
            <a className="dropdown-item" href="#">within 5 miles</a>
            <a className="dropdown-item" href="#">within 10 miles</a>
          </div>
        </div>
        <div className="btn-group">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Preference
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Pizza</a>
            <a className="dropdown-item" href="#">Sushi</a>
            <a className="dropdown-item" href="#">Drinks</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">No Preference</a>
          </div>
        </div >
      </>
    );

    let searchField = (
      <div className="row py-3">
        <div className="col-lg-12">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-left border-right-0"
              id="searchField"
              placeholder='Try Queens College'
              value={this.state.searchFieldValue}
              onChange={this.onSearchFieldChange}>
            </input>
            <div className="input-group-append">
              <button onClick={this.onSearch} className="btn btn-outline-dark rounded-right">search</button>
            </div>
          </div>
        </div>
        <div className="col-auto">
          {filters}
        </div>
      </div>
    );

    let presetLocations = ['brooklyn-college', 'hunter-college', 'johnjay-college', 'queens-college'];

    return (
      <div>
        {searchField}
        <div className="row p-3">
          {presetLocations.map((location, index) =>
            <div className="col-lg-6 px-1">
              <FilterComponent imgSrc={require(`../logos/${location}-logo.png`)} onClick={() => this.filterLocation(index)} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
