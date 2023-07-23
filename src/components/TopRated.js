import MovieArray from "./MovieArray";
import './TopRated.css';
const TopRated = ()=>{
    return (
        <>
            <div className="toprated-container">
            <p>Top-Rated on Netflix</p>
            <MovieArray></MovieArray>
            </div>
        </>
    )
}

export default TopRated;