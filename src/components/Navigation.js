/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Calculator.js">Calculator</Link>
        <Link to="/Quote.js">Quote</Link>
      </nav>
    </>
  );
}

export default Navigation;
