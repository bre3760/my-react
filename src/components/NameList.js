import React from 'react'
import Person from './Person'
// function NameList() {

//     const names = ['Bruce', 'Clark']
//     // https://reactjs.org/docs/lists-and-keys.html#keys keys in the list 
//     const nameList = names.map((name)=>(<h2 key={name.toString()}>{name}</h2>)) // from react docs the key 
//     return (
//         <div>
//             {
//                 // here alone 
//                 //names.map((name)=>(<h2>{name}</h2>)) //javascript needs curly braces for name
//                 // if i define nameList as const above
//                 nameList

//             }
//         </div>
//     )
// }

// export default NameList




// function NameList() {

//     const persons = [
//         {
//             id:1,
//             name:'Bruce',
//             age:30
//         },
//         {
//             id:2,
//             name:'Clark',
//             age:25
//         }
//     ]
//     const personList = persons.map((person)=>(
//         <Person key={person.id}  person={person}></Person> // passing the person as a props to Person.js
//     ))  
//     // key has to be unique, very important  
//     return (
//         <div>
//             {personList}
//         </div>
//     )
// }

// export default NameList


// lesson 19 index as key
function NameList() {
    const names = ['Bruce', 'Clark'] // there is no unique id now
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30
        },
        {
            id:2,
            name:'Clark',
            age:25
        }
    ]
    const nameList = names.map((name,index)=>(
        <h2 key={index}> {index} {name} </h2> 
    ))  
    // key has to be unique, very important  
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
