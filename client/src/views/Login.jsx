import React, { useState } from 'react'
import axios from 'axios'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ email: "", password: "" })
  const login = (e, loginUser) => {
    e.preventDefault()
    console.log("login User");
    console.log(loginUser);
    axios.post(`http://localhost:8000/api/login`, loginUser, { withCredentials: true })
      .then(response => {
        console.log(response),
          navigate('/home')
      }
      )
      .catch(error => console.log(error))
  }
  return (
    <div>
      <LoginForm user={user} setter={setUser} operation={login} />
    </div>
  )
}

export default Login