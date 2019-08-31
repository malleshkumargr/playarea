import React from 'react'
import axios from 'axios' // npm install --save axios

import UserItem from './UserItem'


class UserList extends React.Component {
    constructor(){
        console.log('constructor')
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        console.log('component did mount')
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('axios success fucntion')
                //console.log(response.data)
                const users = response.data
                this.setState({ users })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return(
            <div>
                <h2>Listing users: {this.state.users.length}</h2>
                <ul> 
                    {this.state.users.map(user => {
                        return <UserItem key={user.id} id={user.id} name={user.name} email={user.email} />
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList
