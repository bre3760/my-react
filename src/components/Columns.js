import React from 'react'

function Columns() {
    const items = [
        {
            id:1,
            title:'Tsti'
        }
    ]
    return (
        <React.Fragment>
            {
                items.map(item => (
                    
                   <React.Fragment key={item.id}>
                       <h1>Title</h1>
                       <p>{item.title}</p>
                   </React.Fragment>
                ))
            }

            
                <td>Name</td>
                <td>Brendan</td>
            
        </React.Fragment>
    )
}

export default Columns
