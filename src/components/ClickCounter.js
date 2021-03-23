import React, { Component } from 'react'
// Higher order components
import withCounter from './withCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }

    // incrementCount = ()=>{
    //     this.setState(
    //         prevState =>{
    //             return {count:prevState.count +1 }
    //         }
    //     )
    // }
    
    render() {
        const {count, incrementCount} = this.props
        return (
                <button onClick={incrementCount}> 
                {this.props.name} Clicked {count} Times
                
                </button>
        )
    }
}
 
export default withCounter(ClickCounter,5) 
