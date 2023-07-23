import React from 'react';
import './Gadgets.css';

const Gadgets = ()=>{
    return (
        <>
            <div className = "gad-container">
                <div className = "gad-left">
                    <h1 className="heading">Watch everywhere.</h1>
                    <p className="para">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="gadright">
                    <img src="asset/gadgets.png" alt="gadgets_Image"/>
                </div>
            </div>
        </>
    )
}

export default Gadgets;