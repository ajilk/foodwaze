import React, { Component } from 'react'

 class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolID: this.props.school  
  }
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
