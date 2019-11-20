import React, { Component } from 'react'

export default class PostsPpage extends Component {
  render() {
    const { location } = this.props.location.state
    return (
      <div>
        {<h1>Post Page for location: <b>{location}</b></h1>}
        <div className="dashboard">
          {
            this.props.posts.filter(post => (post.location == location))
            .map(post => <Post key={interviepostw.id} post_={post}/>)
          }       
        </div>
      </div>
    )
  }
}
