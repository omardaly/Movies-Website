import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
const OneTvShow = () => {
    const [oneTvShow, setOneTvShow] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA0ZjIwMGE5NmVhNDllNzVlMzVlZmYxYjYwYzRlNCIsInN1YiI6IjY2NTg0ZmRmNWU4NmFiYzQyNTJkMjcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fKY11EInZXjZqzVy2ITwd6WkqHZ0uErFwzJFylfDgYU'
            }
        })
            .then(response => {
                console.log(response.data);
                setOneTvShow(response.data);
            })
            .catch(err => console.error('error:' + err));
    }, [id]);

    return (
        <>
            <Nav />
            <div className='box'>
                <div className='coverImage'>
                    <img src={`https://image.tmdb.org/t/p/original${oneTvShow.poster_path}`} alt={oneTvShow.title} />
                </div>
                <div className='content flex '>
                    <div className='details row'>
                        <div className='cast'>
                            <h1>{oneTvShow.title}</h1>
                            <br />
                            <h4>
                                <span>VOTE: </span>
                                {oneTvShow.vote_average}
                            </h4>
                            <h4>
                                <span>RELEASE_DATE: </span>
                                {oneTvShow.release_date}
                            </h4>
                            <h4>
                                <span>OVERVIEW: </span><br />
                                {oneTvShow.overview}
                            </h4>
                            <h4>
                                <span>Original Title: </span>
                                {oneTvShow.original_title}
                            </h4>
                            <h4>
                                <span>Original Language: </span>
                                {oneTvShow.original_language}
                            </h4>
                            <h4>
                                <span>Popularity: </span>
                                {oneTvShow.popularity}
                            </h4>
                        </div>
                        <button className='primary-btn'>
                            <i className='fas fa-play'></i> PLAY NOW
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneTvShow;
