
import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
class ComponentE extends Component {
    render() {
        return(
            <div>
                Component E Context {this.context}
                <ComponentF></ComponentF>
            </div>
            
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE
