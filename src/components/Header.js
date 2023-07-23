import React from 'react';
// import mainLogo from '../asset/main-logo.png';
import './Header.css';
import {useNavigate} from 'react-router-dom'

const Header = ()=>{
    const navigate = useNavigate();
    const signInHandler = (e)=>{
        navigate('/signin');
    }
    return(
        <>
            <div className='header'>
                <img src="asset/main-logo.png" alt="logo" className='logo'/>
                <div className='signIn-group'>
                    <select className='dropdown'>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button type='button' className='signIn-btn' onClick={signInHandler}>Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Header;