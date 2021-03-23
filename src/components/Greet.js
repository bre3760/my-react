import React from 'react'
// old way
// function Greet(){
//     return <h1>Hello Bre</h1>
// }

//ES6 way
//const Greet = () => <h1>Hello Bre</h1>

//to use props 
// adding parameter to the function 
//and then use it in the function body

// const Greet = (props) => {
//     console.log(props)
//     return ( // parenthesis because multiple lines, can only retutn one html element
//         <div>
//             <h1>Hello {props.name} a.k.a. {props.heroName}</h1>
//             <p>{props.children}</p>
//         </div>
//     )
// }


//destructuring props
//to destructure props use curly braces and put each part of the props inside
// const Greet = ({name,heroName}) => {
    
//     return ( // parenthesis because multiple lines, can only retutn one html element
//         <div>
//             <h1>Hello {name} a.k.a. {heroName}</h1> 
//             {/* remove the need for props.name */}
            
//         </div>
//     )
// }

// the second way of destructuring the props object is 
const Greet = (props) => {
    const {name,heroName} = props
    return ( // parenthesis because multiple lines, can only retutn one html element
        <div>
            <h1>Hello {name} a.k.a. {heroName}</h1> 
            {/* remove the need for props.name */}
            
        </div>
    )
}
export default Greet 