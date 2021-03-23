import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    // using setState
    // increment(){
    //     this.setState(
    //         {
    //         count:this.state.count +1 //this is an object that sets the state value
    //         },
    //         ()=>{console.log('Callback value', this.state.count)} // async

    //     )
    //     console.log(this.state.count) //syncronous
    // }

    // this time i pass a funciton as the first parameter since
    // i want to change the state based on the previous value of the state
    increment(){
        this.setState(
            (prevState)=>({
                count : prevState.count +1
            })
            ,
            ()=>{console.log('Callback value', this.state.count)} // async

        )
        console.log(this.state.count) //syncronous
    }
    

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                {/* <button onClick={()=> this.increment()}>Increment</button> */}
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
