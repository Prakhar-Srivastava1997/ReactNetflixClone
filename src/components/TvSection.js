//import TvImage from '../asset/TV.png';
import './TvSection.css';

const TvSection = ()=>{
    return (
        <>
            <div className = "tv-container">
                <div className = "tv-left">
                    <h1 className="heading">Enjoy on your TV.</h1>
                    <p className="para">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="tv-right">
                    <img src="asset/TV.png" alt="TV_Image"/>
                </div>
            </div>
        </>
    )
}

export default TvSection;