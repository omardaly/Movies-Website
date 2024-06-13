import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const navigate = useNavigate()

  const [user, setUser] = useState({ userName: "", email: "", password: "", confirmPassword: "" });
  const register = (e, newUser) => {
    e.preventDefault()
    console.log('Registering user:', newUser);
    axios.post(`http://localhost:8000/api/register`, newUser, { withCredentials: true })
      .then(response => {
        console.log(response)
        navigate('/home')
      })
      .catch(error => console.log(error))

    setUser({ userName: "", email: "", password: "", confirmPassword: "" })

  }
  return (
    <div>
      <RegisterForm user={user} setter={setUser} operation={register} />
    </div>
  );
};

export default Register