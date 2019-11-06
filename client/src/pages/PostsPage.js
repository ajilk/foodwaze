import React, { Component } from 'react'

 class PostsPage extends Component {
  constructor() {
    const { schoolID } = this.props
  }
  render() {
    return (
      <div>
        <h1>Posts Page for school {this.schoolID}</h1>
      </div>
    )
  }
}
export default PostsPage;
