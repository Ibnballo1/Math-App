/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Calculator.js">Calculator</Link>
        <Link to="/Quote.js">Quote</Link>
      </nav>
    </header>
  );
}

export default Header;
