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
    this.fetchPosts();
  }

  fetchPosts = async () => {
    let userPosts = await fetch('/api/post/all/user', {
      method: 'GET',
    }).then(response => response.json());
    this.setState({ posts: userPosts });
  }

  onDelete = async (post) => {
    await fetch(`/api/post/delete`, {
      headers: { "Content-Type": "application/json" },
      method: 'PUT',
      body: JSON.stringify({
        postId: post.id,
      }),
    }).then(response => response.json());
    this.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>{this.state.user['firstName']} {this.state.user['lastName']}</h1>
        <div className="card-columns">
          {this.state.posts.map(post => <PostComponent onDelete={this.onDelete} post={post} key={post.id} />)}
        </div>
      </div>
    )
  }
}
