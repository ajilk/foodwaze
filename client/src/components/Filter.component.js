import React from 'react'
import useHover from './useHover';

export default function FilterComponent({ onClick, imgSrc }) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef} onClick={onClick} className={isHovered ? "card mb-3 shadow" : "card mb-3"} >
      <img height={200} className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">[Providers Name]</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </ div>
  );
}
