//import mobileImage from '../asset/mobile.png';
import './MobileSection.css';

const MobileSection = ()=>{
    return (
        <>
            <div className = "mob-container">
                <div className = "mob-left">
                    <img src="asset/mobile.png" alt="Mobile_Image"/>
                </div>
                <div className="mob-right">
                    <h1 className="heading">Download your shows to watch offline.</h1>
                    <p className="mobpara">Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </>
    )
}

export default MobileSection;