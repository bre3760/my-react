import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin:true
        }
    }
    
    render() {
        // if else method
        // if (this.state.isLoggedin){
        //     return(
        //         <div>Welcome Bre</div>
        //     )
        // } else {
        //     return(
        //         <div>Welcome Random Person</div>

        //     )
        // }
        // base structure
        // return (
        //     <div>
        //         <div>Welcome Bre</div>
        //         <div>Welcome random person</div>
        //     </div>
        // )


        // second way with element variables
        // let message // element that stores the variable
        // if (this.state.isLoggedin) {
        //     message = <div>Welcome Bre</div>
        // } else {
        //     message = <div>Welcome Random User</div>
        // }

        // return (
        //     <div>{message}</div>
        // ) 

        // third approach, ternary condition
        // return(
        //     this.state.isLoggedin ? //this is evaluated and then the correct element is chosen
        //         (<div>Welcome Brendan</div> ) :
        //         (<div>Welcome Guest</div>)
        // )

        // short circuit method 
        return(
            this.state.isLoggedin && <div>Welcome Brendan</div> // showing this or nothing
        )
        

    }
}

export default UserGreeting
