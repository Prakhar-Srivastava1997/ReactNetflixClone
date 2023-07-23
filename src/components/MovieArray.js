import { useContext } from "react";
import MovieCard from "./MovieCard";
import { Context } from "./UserDashboard";
import './MovieArray.css';

const MovieArray = ()=>{
    const movies = useContext(Context);
    console.log("Context movies : ", movies)
    return(
        <>
            <div className="moviearray">
            {movies.map((data)=>{
                return(
                    <div key={data.id}>
                        <MovieCard movieObj={data}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default MovieArray;