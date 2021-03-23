import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Brendan'
        }
        console.log('LifeCycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    //Updating
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    //Updating
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }


    //Updating
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }


    changeState = () => {
        this.setState({
            name:'David'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>

            </div>
            
        )
    }
}

export default LifeCycleA
