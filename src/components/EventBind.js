import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
        // 3rd option for binding
        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler(){
        this.setState({
            message:'byee'
        })
        // console.log(this) gives undefined if no bind
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this) }>Click</button> */}
                {/* <button onClick={()=>this.clickHandler() }>Click</button> */}
                <button onClick={this.clickHandler }>Click</button>
            </div>
        )
    }
}

export default EventBind
