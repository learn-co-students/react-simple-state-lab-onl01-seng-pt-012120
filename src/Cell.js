import React, { Component } from 'react';


    export default class Cell extends Component {
        constructor(props){
            super()
            this.state = {
                color : props.value
            }
    }
    newState = () => {
        this.setState({
            color : '#333'
        })
    }
    render(){
        // console.log(this.state.color)
        return(
            <div onClick={this.newState} className={"cell"} style={{backgroundColor: this.state.color}}></div>
        )
    }
}