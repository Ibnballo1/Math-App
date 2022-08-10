/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
import * as React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
  const [item, setItem] = useState({
    calcV: {},
    result: '0',
  });

  const handler = (event) => {
    const { calcV } = item;
    const calc = calculate(calcV, event.target.value);
    const { total, next, operation } = calc;
    let result = '';

    if (total) {
      result += total;
    }

    if (operation) {
      result += operation;
    }

    if (next) {
      result += next;
    }

    if (result.length === 0) result = '0';

    setItem({ calcV: calc, result });
  };

  const { result } = item;

  return (
    <div className="App">
      <h1>Math Magicians</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
