import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const AuthButton = withRouter(({ history }) => {
  if (!auth.isAuthenticated) {
    return (
      <div className="col px-0">
        <div className="input-group">
          <Link to='/login' style={{ textDecoration: 'none' }} className="input-group-append ml-auto">
            <button className="btn btn-outline-dark border-right-0 rounded-left">login</button>
          </Link>
          <Link to='/signup' style={{ textDecoration: 'none' }} className="input-group-append">
            <button className="btn btn-outline-dark rounded-right">signup</button>
          </Link>
        </div>
      </div>
    );
  }


  const signout = () => {
    auth.signout().then(() => history.push('/'));
  }

  return (
    <div className="input-group">
      <Link to='/login' style={{ textDecoration: 'none' }} className="ml-auto input-group-append">
        <button className="btn btn-outline-dark rounded-left" onClick={signout}>sign out</button>
      </Link>
    </div>
  );
});

export default AuthButton;
