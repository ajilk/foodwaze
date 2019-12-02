import React, { Component } from 'react';
// import PostComponent from '../components/Post.Component';

export default class PostsPage extends Component {
  render() {
    const { location } = this.props.location.state
    return (
      <div>
        {<h1>Post Page for location: <b>{location}</b></h1>}
        {/* <div className="dashboard"> {
            this.props.posts.filter(post => (post.location == location))
              .map((post, index) => <PostComponent key={index} post_={post} />)
          }
        </div> */}
      </div>
    )
  }
}
