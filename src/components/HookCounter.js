import React, {useState} from 'react'
 
function HookCounter() {
    // since hooks are just functions we simply call them
    //the hook accepts an argument which is an initial value 
    // and returns the current value of the state property 
    // and a method that is capoable of updating the statte property
    const [count, setCount]  =  useState(0)

    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Count {count} </button>
        </div>
    )
}

export default HookCounter
