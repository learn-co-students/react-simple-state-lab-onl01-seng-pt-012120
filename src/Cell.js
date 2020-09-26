 import React, { Component } from 'react';



// class MyComp extends React.Component {
 
//     // we use the constructor to set the INITIAL STATE
//     constructor() {
//       super()
//       this.state = {
//         count: 0
//       }
//     }

export default class Cell extends Component {

constructor(props) {
    super()
    this.state = {
        color: props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

//   increment = () => {
//     const newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
//   }


  newState = () => {
    // const newState = this.state.backgroundColor: '#FFF'
    this.setState({
      color:  '#333'
    })
  }
 


//   render() {
//     return (
//       <div onClick={this.increment}>
//         {this.state.count}
//       </div>
//     )
//   }
// }


  render() {
    return (
        <div onClick={this.newState} className="cell" style={{backgroundColor: this.state.color}}> </div>
    )
  }
}