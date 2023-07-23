import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import './MovieDetail.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import {useNavigate} from 'react-router-dom'

const MovieDetail = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const [movieData, setMovieData] = useState({})
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(()=>{
        if(!localStorage.getItem("LoginCred")){
            navigate('/signin');
        }
        setMovieData(location.state)
    }, [])

    const showTrailer = ()=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movieData.title || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
        }
        
    }

    const opts = {
        height:"400",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    }

    return(
        <>
            <div className='detail-container'>
                <div className='movie-container'>
                    <div className='movie-image'>
                        <img src={movieData.movie_image} alt="movie-image"/>
                    </div>
                        
                    <div className='movie-info'>
                        <h1>{movieData.title}</h1>
                        <p>{movieData.overview}</p>
                        <p>Release Date : {movieData.release_date}</p>
                        <p>IMDB Rating : {movieData.rating}</p>
                        <p>Duration : {movieData.duration}</p>
                        <p>Genre : {movieData.genre}</p>
                        {trailerUrl?(<button type='button' className='trailer-btn' onClick={showTrailer}>Stop trailer</button>):(<button type='button' className='trailer-btn' onClick={showTrailer}>Play Now</button>)}
                    </div>
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
        </>
    )
}

export default MovieDetail;