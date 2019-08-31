import React from 'react'
import { Link } from 'react-router-dom'

function UserItem(props) {
    console.log('useritem component', props)
    return (
        <li>
            <Link to={`/users-show/${props.id}`}>{props.name}</Link> {props.email}
            <button>remove</button>
        </li>
    )
}

export default UserItem