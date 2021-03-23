import React, { Component } from 'react'

class LifeCycleB extends Component {
    //Mounting 
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Brendan'
        }
        console.log('LifeCycleB constructor')
    }
    //Mounting and Updating
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    //Mounting
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    //Updating
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    //Updating
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    //Updating
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

    //Mounting and Updating
    render() {
        console.log('LifeCycleB render')
        return (
            <div>Lifecycle B</div>
        )
    }
}

export default LifeCycleB
