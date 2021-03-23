import React, { Component } from 'react'
import { UserConsumer } from './userContext'
export class ComponentF extends Component {
    render() {
        return (
            <div>
                Component F
                <UserConsumer>
                    {
                        (username) => {
                            return <div>Hello {username}</div>
                        } 
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
