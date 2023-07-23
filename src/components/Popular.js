import MovieArray from "./MovieArray";
import './Popular.css'

const Popular = ()=>{
    return (
        <>
            <div className="popular-container">
                <p>Popular on Netflix</p>
                <MovieArray></MovieArray>
            </div>
        </>
    )
}

export default Popular;