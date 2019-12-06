const auth = {
  isAuthenticated: false,
  authenticate(email, password) {
    return fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) throw new Error('Login Failed');
      return response.json();
    }).then(body => {
      this.isAuthenticated = true;
      return body;
    });
  },
  signUp(firstName, lastName, email, password) {
    return fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) throw new Error('Signup Failed');
      return response.json();
    }).then(body => {
      this.isAuthenticated = true;
      return body;
    });
  },
  signout(callback) {
    return fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => {
      if (!response.ok) throw new Error('Logout Failed');
      return response.json();
    }).then(body => {
      this.isAuthenticated = false;
      return body;
    });
  },
  getUser(callback) {
    fetch('/api/auth/user', {
      credentials: 'include',
      method: 'GET',
    }).then(response => response.json()
    ).then(body => callback(body))
  }
}

export default auth;