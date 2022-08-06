/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

const App = () => {
  const [item, setItem] = useState({
    calcV: {},
    res: '0',
  });

  const handler = (event) => {
    const { calcV } = item;
    const calc = calculate(calcV, event.target.value);
    const { total, next, operation } = calc;
    let res = '';

    if (total) {
      res += total;
    }

    if (operation) {
      res += operation;
    }

    if (next) {
      res += next;
    }

    if (res.length === 0) res = '0';

    setItem({ calcV: calc, res });
  };

  const { res } = item;

  return (
    <div className="App">
      <Calculator handler={handler} total={res} />
    </div>
  );
};

export default App;
