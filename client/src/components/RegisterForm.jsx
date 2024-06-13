
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';



const RegisterForm = ({ user, setter, operation }) => {

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div className="login-page">

            </div>
            <div className="form">

                <form onSubmit={(e) => operation(e, user)} className="login-form">
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" required autoComplete="userName" onChange={(e) => setter({ ...user, userName: e.target.value })} value={user.userName} />
                    <input type="text" placeholder="Email" required autoComplete="current-email" onChange={(e) => setter({ ...user, email: e.target.value })} value={user.email} />
                    <input type="password" placeholder="Password" required autoComplete="current-password" onChange={(e) => setter({ ...user, password: e.target.value })} value={user.password} />
                    <input type="password" placeholder="confirmPassword" required autoComplete="current-password" onChange={(e) => setter({ ...user, confirmPassword: e.target.value })} value={user.confirmPassword} />

                    <button className="btn" type='submit'>

                        Sign in
                    </button>
                    <p className="message">already have an Account ? <Link to={'/Login'} >Login</Link></p>

                </form>

            </div>

        </div>
    );
};


export default RegisterForm;
