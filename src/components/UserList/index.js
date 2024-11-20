import {Component} from 'react'

import User from '../User'
import UserForm from '../UserForm'

import './index.css'

class UserList extends Component {
  state = {
    users: [],
    error: null,
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}))
      .catch(error => this.setState({error}))
  }

  render() {
    const {users, error} = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    }

    return (
      <div>
        <h2>Users</h2>
        <UserForm />
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList
