import React, { Component } from 'react'

export default class FilterComponent extends Component {
  handleClick = () => this.props.onFilterClick(this.props.value);

  render() {
    return <a
      className="dropdown-item"
      onClick={this.handleClick}
      href="#"
    >{this.props.value}</a>
  }
}
