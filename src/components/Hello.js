import React from 'react'

//no jsx
const Hello = () => {
    return React.createElement( // accepts
        'div',
        {'id':'hello','className':'dummyClass'},
        React.createElement('h1',null,'WASSSUUUPP'),

    )
}

export default Hello 