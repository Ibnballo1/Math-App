/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Result from './result';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Result />
      </div>
    );
  }
}

export default Calculator;
