import React from 'react';
import useHover from './useHover';
import { AiOutlineDelete } from 'react-icons/ai';

const IMAGE_URL = 'https://res.cloudinary.com/hsr6kguq8/image/upload/';

function PostComponent(props) {
  const { post } = props;
  const [hoverRef, isHovered] = useHover();

  const date = new Date(post.createdAt).toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div ref={hoverRef} className={`card my-2 ${isHovered ? "shadow-lg" : ""}`}>
      <div className="card-img-top">{
        !post.images[0]
          ? null
          : <img alt='post-pic' className="rounded-top" src={IMAGE_URL + post.images[0]} width="100%" />
      }</div>
      <div className="card-body p-3">
        <h5 className="card-title font-weight-bold mb-2">{post.title}</h5>
        <div className="card-subtitle font-weight-light mb-3">{post.location}</div>
        <div className="card-text mb-4"><pre><p>{post.description}</p></pre></div>
        <div className="row mt-auto">
          <div className="col my-auto">
            {!props.onDelete ? null :
              <btn onClick={() => props.onDelete(post)}>
                <h4 className="text-danger"><AiOutlineDelete /></h4>
              </btn>}
          </div>
          <div className="col-auto my-auto">
            <div className="card-text text-right"> <small className="text-muted">{post.owner['firstName']} {post.owner['lastName']}</small></div>
            <p className="card-text text-right"><small className="text-muted">{date}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;