import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const TvShow = () => {
    const [tvShows, setTvShows] = useState([]);
    const [originalShows, setOriginalShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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

    function onChange(e) {
        const value = e.target.value;
        setTvShows(originalShows.filter(show => show.name.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div className='body'>
            <Nav />

            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={onChange} />
                <button className='searchButton'>Search</button>
            </div>

            <div className="movie-container">
                {tvShows.map(tv => (
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

export default TvShow;
