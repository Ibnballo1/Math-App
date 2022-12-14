import * as React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator.js" element={<Calculator handler={handler} total={result} />} />
        <Route path="/Quote.js" element={<Quote />} />
      </Routes>
    </div>
  );
};

export default App;
