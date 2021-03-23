import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* basic way */}
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* passing parameter to parent */}
            <button onClick={ () =>  props.greetHandler('child_parameter')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent 
