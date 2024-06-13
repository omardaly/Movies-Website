import React from 'react'
import { Link } from 'react-router-dom'
const LoginForm = ({ user, setter, operation }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <div className="login-page">

      </div>
      <div className="form">

        <form onSubmit={(e) => operation(e, user)} className="login-form">
          <h2>Register</h2>
          <input type="text" placeholder="Email" required autoComplete="current-email" onChange={(e) => setter({ ...user, email: e.target.value })} value={user.email} />
          <input type="password" placeholder="Password" required autoComplete="current-password" onChange={(e) => setter({ ...user, password: e.target.value })} value={user.password} />

          <button className="btn" type='submit'>

            Sign in
          </button>
          <p className="message">already have an Account ? <Link to={'/RegisterForm'} >Create an Account</Link></p>

        </form>


      </div>
    </div>
  );
};


export default LoginForm