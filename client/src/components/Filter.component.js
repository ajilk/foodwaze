import React, { useState, useRef, useEffect } from 'react'

// https://usehooks.com/useHover/
function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

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
