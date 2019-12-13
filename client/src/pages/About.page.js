import React, { Component } from 'react'
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import useHover from '../components/useHover'

function Contributor(props) {
  const [hoverRef, isHovered] = useHover();

  function onClick(url) {
    return () => window.open(url, '_blank');
  }

  return (
    <div ref={hoverRef} onClick={!props.website ? null : onClick(props.website)} className={`card p-5 ${isHovered ? 'shadow-lg' : ''}`}>
      <div className="card-title"><h2>{props.name}</h2></div>
      <div className="card-text">
        {!props.github ? null : <btn className="btn btn-sm btn-outline-dark m-2" onClick={onClick(props.github)}><span className="h3"><FiGithub /></span></btn>}
        {!props.linkedin ? null : <btn className="btn btn-sm btn-outline-dark m-2" onClick={onClick(props.linkedin)}><span className="h3"><FiLinkedin /></span></btn>}
        {!props.twitter ? null : <btn className="btn btn-sm btn-outline-dark m-2" onClick={onClick(props.twitter)}><span className="h3"><FiTwitter /></span></btn>}
      </div>
    </div>
  );
}

export default class AboutPage extends Component {
  render() {
    return (
      <div className="text-center">
        <h2>Contributors</h2>
        <div className="row pt-5">
          <div className="col-lg-4 col-12 my-3">
            <Contributor
              name="Azimjon Ilkhomov"
              website="https://ajilk.com"
              linkedin="https://linkedin.com/in/ajilk"
              github="https://github.com/ajilk"
              twitter="https://twitter.com/ajilkhomov"
            />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <Contributor
              name="Saar Haber"
              linkedin="https://linkedin.com/in/saarhaber"
              github="https://github.com/saarhaber"
            />
          </div>
          <div className="col-lg-4 col-12 my-3">
            <Contributor
              name="Daniel Pepin"
              linkedin="https://linkedin.com/in/danielp1299/"
              github="https://github.com/dogpatch626"
            />
          </div>
        </div>
      </div >
    );
  }
}
