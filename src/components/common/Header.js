import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          App logo
        </Link>

        <nav className="nav">
          <Link className="nav__link" to="/">
            Home
          </Link>
          <Link className="nav__link" to="/about">
            About
          </Link>
          <Link className="nav__link" to="/courses">
            Courses
          </Link>
        </nav>
      </header>
    );
  }
}
