import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
// import PostComponent from '../components/Post.Component';

export default class PostsPage extends Component {
>>>>>>> b3ee0995b372cf47290a96fff6cce5e37575ee3d
  render() {
    const { location } = this.props.location.state;
    return (
<<<<<<< HEAD
    <div id="cards">
    {/* { datafrom data base will filter the posts by location */}
    {this.state.posts.filter(post => (post.college == location)).map(post => <Post key={post.id} post={post} />)}
    </div>
=======
      <div>
        {<h1>Post Page for location: <b>{location}</b></h1>}
        {/* <div className="dashboard"> {
            this.props.posts.filter(post => (post.location == location))
              .map((post, index) => <PostComponent key={index} post_={post} />)
          }
        </div> */}
      </div>
>>>>>>> b3ee0995b372cf47290a96fff6cce5e37575ee3d
    )
  }
}
