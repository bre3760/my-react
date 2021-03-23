// useEffect After Render
import React,{useState, useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)

    // we pass in a parameter which is a function that is executed after every render of the component
    useEffect(
        () => {
            document.title = `You clicked ${count} times`
        }
    ) 

    return (
        <div>
            <button onClick={() => setCount(count +1)} >click {count}</button>
        </div>
    )
}

export default HookCounterOne
