import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Redux auth app</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/">Sign Out</Link>
        <Link to="/">Features</Link>
      </div>
    );
  }
}

export default Header;