import React, { Component } from 'react'
import PostForm from '../components/PostForm.component';
import PhotoDrop from '../components/PhotoDrop.component';

export default class PostPage extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">
          <PostForm />
        </div>
      </div>
    );
  }
}