import React from 'react';
import propTypes from 'prop-types';

const Calculator = (props) => {
  const data = ['0.00', 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const { total, handler } = props;
  const keypad = 'button';
  const calculator = 'calContainer';
  return (
    <section className="sections">
      <p className="para">Let&apos; do some math!</p>
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
    </section>
  );
};

Calculator.propTypes = {
  total: propTypes.string.isRequired,
  handler: propTypes.func.isRequired,
};

export default Calculator;
