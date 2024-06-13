import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./OneMovie.css";
import { useParams } from 'react-router-dom'
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const OneMovie = (props) => {
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${id}`, { withCredentials: true })
            .then(response => {
                console.log(response.data);
                setMovie(response.data)
            })
            .catch(error => {
                console.log(error.response.status)
                if (error.response.status == 401)
                    navigate('/login')
            }
            )
    }, [id])

    return (
        <>
            <Nav />
            <div className='box'>
                <div className='coverImage'>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className='content flex '>
                    <div className='details row'>



                        <div className='cast'>
                            <h1 >{movie.title}</h1>
                            <br />

                            <h4>
                                <span>VOTE: </span>
                                {movie.vote_average}
                            </h4>
                            <h4>
                                <span>RELEASE_DATE: </span>
                                {movie.release_date}
                            </h4>




                            <h4>

                                <span>OVERVIEW: </span><br />
                                {movie.overview}
                            </h4>

                            <h4>
                                <span>Original Title: </span>
                                {movie.original_title}
                            </h4>
                            <h4>
                                <span>Original Language: </span>
                                {movie.original_language}
                            </h4>
                            <h4>
                                <span>Popularity: </span>
                                {movie.popularity}
                            </h4>
                        </div>
                        <button className='primary-btn'>
                            <i className='fas fa-play'></i> PLAY NOW
                        </button>
                    </div>


                </div>
            </div >
        </>
    )
}

export default OneMovie