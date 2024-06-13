import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Nav = () => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post(`http://localhost:8000/api/logout`, {}, { withCredentials: true })
            .then(response => {
                console.log(response)
                navigate("/login")
            })
            .catch(error => console.log(error))
    }

    return (

        <div className="container">
            <nav className="Nav">
                <h2 onClick={() => navigate('/home')}>Movies</h2>
                <ul className="ul link-offset">
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/movies')}>Movies</li>
                    <li onClick={() => navigate('/TvShow')}>TV Show</li>
                </ul>
                <button className="button1" onClick={logout} >Logout</button>


            </nav>

        </div>



    );
};

export default Nav;
