import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const user = response.data
                this.setState({ user })
            })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>name - { this.state.user.name }</p>
                <p>email - { this.state.user.email}</p>

                <Link to="/users">back</Link>
            </div>
        )
    }
}

export default UserShow