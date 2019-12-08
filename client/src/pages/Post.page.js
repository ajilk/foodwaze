import React, { Component } from 'react'
import PostForm from '../components/PostForm.component';
import PhotoDrop from '../components/PhotoDrop.component';

export default class PostPage extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12">
          <PostForm />
        </div>
      </div>
    );
  }
}