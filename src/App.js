import React from 'react'
//npm install --save react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Counter from './Counter'
import UserList from './UserList'
import Parent from './Parent'
import UserShow from './UserShow'

function App(props) {
    return (
        <BrowserRouter>
             <div>
                <h1>{props.title}</h1>
                <Link to="/counter-example">Counter ex</Link> &nbsp;
                <Link to="/users">Users</Link> &nbsp;
                <Link to="/parent-ex">Parent</Link> &nbsp;

                <Route path="/counter-example" component={Counter} />
                <Route path="/users" component={UserList} />
                <Route path="/parent-ex" component={Parent} />
                <Route path="/users-show/:id" component={UserShow} />
            </div>
        </BrowserRouter>
    )
}

export default App