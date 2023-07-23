import './MovieCard.css';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const MovieCard = ({ movieObj })=>{
    const navigate = useNavigate()
    const cardClicked = ()=>{
        navigate('/moviedetail', {state:movieObj})
    }
    return(
        <>
            <div className="card-body" onClick={cardClicked}>
                <img src={movieObj.movie_image} alt="movie_image"/>
            </div>
        </>
    )
}

export default MovieCard;