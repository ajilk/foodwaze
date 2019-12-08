import React, { Component } from 'react';
import useHover from './useHover';

const IMAGE_URL = 'https://res.cloudinary.com/hsr6kguq8/image/upload/';

function PostComponent(props) {
  const { post } = props;
  const [hoverRef, isHovered] = useHover();
  return (
    <div ref={hoverRef} className={`card my-2 ${isHovered ? "shadow-lg" : ""}`}>
      <div className="card-img-top">{
        !post.images[0]
          ? null
          : <img className="rounded-top" src={IMAGE_URL + post.images[0]} width="100%" />
      }</div>
      <div className="card-body p-3">
        <h5 className="card-title font-weight-bold mb-0">{post.title}</h5>
        <div className="card-subtitle font-weight-light">{post.location}</div>
        <div className="card-text pb-4">{post.description}</div>
        <div className="card-text text-right"> <small class="text-muted">{post.owner['firstName']} {post.owner['lastName']}</small></div>
        <p class="card-text text-right"><small class="text-muted">{post.createdAt}</small></p>
      </div>
    </div>
  );
}

export default PostComponent;