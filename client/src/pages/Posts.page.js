import React, { Component } from 'react';
import Post from '../components/Post';
import data from '../mocks/posts.json';
import './Posts.page.css';

export default class PostsPpage extends Component {
  state = {
    posts: []
  }
  componentDidMount = async () => {
    
    // const data = await response.json()
    this.setState({posts: data})
    console.log({data})
  }
  render() {
    const { location } = this.props.location.state;
    return (
    <div id="cards">
    {/* { datafrom data base will filter the posts by location */}
    {this.state.posts.filter(post => (post.college == location)).map(post => <Post key={post.id} post={post} />)}
    </div>
    )
  }
}
