/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import propTypes from 'prop-types';
import './Cal.css';

const Calculator = (props) => {
  const data = ['0.00', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const { total, handler } = props;
  const keypad = 'button';
  const calculator = 'calContainer';
  return (
    <>
      <p>Let&apos; do some math!</p>
      <div className={calculator}>
        {
          data.map((eachData, index) => {
            if (index === 0) {
              return <input type={keypad} readOnly className={`item${index}`} key={`item${index + 1}`} value={total} />;
            }
            return <input type={keypad} onClick={handler} className={`item item${index}`} key={`item${index + 1}`} value={eachData} />;
          })
        }
      </div>
    </>
  );
};

Calculator.propTypes = {
  total: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default Calculator;
