import './index.css'

const User = props => {
  const {user} = props
  const {id, name, email} = user
  return (
    <div className="user">
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default User
