/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Keypads extends React.Component {
  render() {
    return (
      <table className="tableData">
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="rightOperator">&divide;</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="rightOperator">&times;</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="rightOperator">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="rightOperator">+</td>
        </tr>
        <tr>
          <td colSpan={2}>0</td>
          <td>.</td>
          <td className="rightOperator">=</td>
        </tr>
      </table>
    );
  }
}

export default Keypads;
