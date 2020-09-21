import React, {Component} from 'react';

export default class Cell extends Component{
    constructor(props){
        super()
        this.state = {color: props.color}
    }

    handelClick = (e) =>{
        this.setState({
            color: '#FFF'
        })
    }

    render(){
        return(
            <div 
                className='cell' 
                style={{backgroundColor: this.state.color}}
                onClick={this.handelClick}>

            </div>
        )
    }
}