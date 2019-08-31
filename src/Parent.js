import React from 'react'
import Child from './Child'

function Parent(props) {
    return (
        <div>
            <h2> {props.title} </h2>
            <Child name="karn" />
            <Child name="arjun" />
        </div>
    )
}

export default Parent