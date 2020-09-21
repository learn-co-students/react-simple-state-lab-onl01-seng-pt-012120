import React, {Component} from 'react';

export default class Cell extends Component{
    constructor(props){
        super()
        this.state = {color: props}
    }


    render(){
        return(
            <div className='cell'>

            </div>
        )
    }
}