import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import "./Movies.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [updateMovies, setUpdateMovies] = useState([]);
    const navigate = useNavigate(); // Fix: call useNavigate to get navigate function

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies', { withCredentials: true })
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
                setUpdateMovies(response.data);
            })
            .catch(error => {
                console.log(error.response.status);
                if (error.response.status === 401) // Fix: use === for comparison
                    navigate('/login');
            });
    }, [navigate]);

    function onChange(e) {
        const value = e.target.value;
        setMovies(updateMovies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div className='body'>
            <Nav />
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={onChange} />
                <button className='searchButton'>Search</button>
            </div>
            <div className="movie-container">
                {movies.map(movie => (
                    <div className="movie-card" key={movie._id} onClick={() => navigate(`/movies/${movie._id}`)}>
                        <div className="content-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <span className="shadow"></span>
                            <div className="content">
                                <h1>{movie.title}</h1>
                                <p className="date">{movie.release_date}</p>
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;
