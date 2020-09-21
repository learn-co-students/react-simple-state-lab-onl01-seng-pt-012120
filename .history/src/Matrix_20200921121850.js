import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: [val1 = [],val2 = [],val3 = [],val4 = [],val5 = [],val6 = [],val7 = [],val8 = [],val9 = [],val10 = []]
}
