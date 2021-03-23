import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    } 
    
    // greetParent(){
    //     // alert('Hello' + this.state.parentName)
    //     alert(`Hello ${this.state.parentName}`)
    // }

    // to receive a parameter from child
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                {/* no parenthesis because we are passing the function as prop, passing the function reference by using props */}
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
