import React, { Component } from 'react'
import PostComponent from '../components/Post.component';
import auth from '../services/auth';

export default class ProfilePage extends Component {
  state = {
    user: {},
    posts: [],
  }

  componentDidMount = async () => {
    auth.getUser(user => this.setState({ user: user }));
    let userPosts = await fetch('/api/post/all/user', {
      method: 'GET',
    }).then(response => response.json());
    this.setState({ posts: userPosts });
  }

  render() {
    return (
      <div>
        <h1>{this.state.user['firstName']} {this.state.user['lastName']}</h1>
        <div className="card-columns">
          {this.state.posts.map(post => <PostComponent post={post} key={post.id} />)}
        </div>
      </div>
    )
  }
}
