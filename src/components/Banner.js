import "./Banner.css";
const Banner=({ movie })=>{
    
    return(
        <>
           <div className="banner-container">
                <div className="movie-brief">
                    <h1 className="title">{movie.title}</h1>
                    <p className="overview">{movie.overview}</p>
                    <div className="banner-btn-grp">
                        <button type="button" className="banner-btn">Play Now</button>
                        <button type="button" className="banner-btn">More Info</button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Banner;