import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className="navbar fixed-bottom navbar-expand-sm bg-dark navbar-dark">
        <div className="container px-0">
          <div className="col">
            <h5 className="text-muted my-auto">Copyright © 2019</h5>
          </div>
          <div className="col-auto pr-0">
            <a class="navbar-brand font-weight-light" href="/about">The Team</a>
          </div>
        </div>
      </footer >
    )
  }
}
