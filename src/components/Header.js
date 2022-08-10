/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="h1">Math Magicians</h1>
      <nav className="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/Calculator.js">Calculator</Link>
        <Link className="links" to="/Quote.js">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
