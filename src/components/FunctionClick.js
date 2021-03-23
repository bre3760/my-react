import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("clicked from functional")
    }


    return (
        <div>
            {/* important no parenthesis on clickHandler, otherwise it calls the function, but we want to pass the function as arg */}
            <button onClick={clickHandler}>Click</button> 
        </div>
    )
}

export default FunctionClick
