import MovieArray from "./MovieArray";
import './Upcoming.css';

const Upcoming = ()=>{
    return (
        <>
            <div className="upcoming-container">
            <p>Upcoming on Netflix</p>
            <MovieArray></MovieArray>
            </div>
        </>
    )
}

export default Upcoming;