import {Component} from 'react'

class UserForm extends Component {
  state = {
    name: '',
    email: '',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    const newUser = {
      name: this.name,
      email: this.email,
    }
    fetch('https://your-backend-api-url/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        console.log('New user created:Sucessfully', data)
      })
      .catch(error => {
        console.error('Error creating user:Failed', error)
      })
    console.log(this.state)
    this.setState({name: '', email: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    )
  }
}

export default UserForm
