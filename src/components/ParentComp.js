import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
// class ParentComp extends Component {
class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Brendan'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Brendan'
            })
        },2000)
    }
    render() {
        console.log('Parent Comp')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name }></PureComp>
            </div>
        )
    }
}

export default ParentComp
