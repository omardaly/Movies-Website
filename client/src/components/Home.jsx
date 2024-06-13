import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import "./Home.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [originalMovies, setOriginalMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tvShows, setTvShows] = useState([]);
    const [originalShows, setOriginalShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies', { withCredentials: true })
            .then(serverResponse => {
                console.log("SERVER RESPONSE", serverResponse);
                setMovies(serverResponse.data)
                setOriginalMovies(serverResponse.data)
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status == 401)
                    navigate('/login')
            })
        fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA0ZjIwMGE5NmVhNDllNzVlMzVlZmYxYjYwYzRlNCIsInN1YiI6IjY2NTg0ZmRmNWU4NmFiYzQyNTJkMjcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fKY11EInZXjZqzVy2ITwd6WkqHZ0uErFwzJFylfDgYU'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setTvShows(response.results);
                setOriginalShows(response.results);
            })
            .catch(err => console.error('error:' + err));

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % movies.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [movies.length]);


    return (
        <div className='body'>
            <Nav />

            <div className="slider">
                {movies.map((movie, index) => (
                    <div className={`hero-slide-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img className="slider-image" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <div className="overlay"></div>
                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title">
                                    {movie.title}
                                </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star"></i>
                                        <span>{movie.vote_average}</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time"></i>
                                        <span>{movie.runtime} mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>16+</span>
                                    </div>
                                </div>
                                <div className="item-content-description">
                                    {movie.overview}
                                </div>
                                <div className="item-action">
                                    <a href="#">
                                        <i className="bx bxs-right-arrow"></i>
                                        <button className='by'>Watch now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='section-header'>
                <h2 className='H2'>LATEST MOVIES</h2>
            </div>

            <div className="movie-container">
                {movies.slice(0, 5).map(movie => (
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
            <div className='section-header'>
                <h2 className='H2'>LATEST TV SHOWS</h2>
            </div>

            <div className="movie-container">
                {tvShows.slice(0, 5).map(tv => (
                    <div className="movie-card" key={tv.id} onClick={() => navigate(`/TvShow/${tv.id}`)}>
                        <div className="content-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
                                alt={tv.name}
                            />
                            <span className="shadow"></span>
                            <div className="content">
                                <h1>{tv.name}</h1>
                                <p className="date">{tv.first_air_date}</p>
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
};

export default Home;
