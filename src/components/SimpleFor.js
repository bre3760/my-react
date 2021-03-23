import React from 'react'

function SimpleFor() {
    var jj = 0
    var diffYears = 1
    for (let indextotalData = diffYears*12; indextotalData < diffYears*12 + 12; indextotalData++) {
        
        //console.log(indextotalData)
        console.log(jj)
        jj = jj+1
    }
    return (
        <div>
            
        </div>
    )
}

export default SimpleFor
